<template>
  <div class="container-lg">
    <div class="d-flex align-items-center mt-5">
      <h1 class="m-0"><i class="bi bi-balloon text-danger"></i>活動消息</h1>

      <!-- pagination -->
      <PaginationComponent class="ms-auto" :pagination="pagination" @current-page="getArticles" />
    </div>
    <table class="table table-hover align-middle text-center m-0 mt-4">
      <thead class="table-primary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">消息</th>
          <th scope="col">描述</th>
          <th scope="col">創建時間</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr
          v-for="(item, index) in articles"
          :key="index"
          @click="() => $router.push(`./news/${item.id}`)"
          style="cursor: pointer"
        >
          <th scope="row">{{ item.num }}</th>
          <td class="d-flex justify-content-center align-items-center">
            <p class="m-0 py-1">{{ item.title }}</p>
            <span class="badge text-bg-danger ms-2" v-if="item.num == 1">NEW</span>
          </td>
          <td>{{ item.description }}</td>
          <td>{{ timestampToTwTime(item.create_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { timestampToTwTime } from '@/plugin/utils';
import PaginationComponent from '@/components/PaginationComponent.vue';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      pagination: {},
    };
  },
  components: { PaginationComponent },
  methods: {
    timestampToTwTime,
    getArticles(page = 1) {
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/articles?page=${page}`)
        .then((res) => {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
        });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
