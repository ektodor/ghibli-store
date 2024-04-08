<template>
  <div class="table-responsive-lg">
    <table class="table text-center align-middle table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">標題</th>
          <th scope="col">作者</th>
          <th scope="col">標籤</th>
          <th scope="col">優惠碼</th>
          <th scope="col">是否公開</th>
          <th scope="col">創建時間</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in articles" :key="item">
          <th scope="row">{{ item.num }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
          <td style="width: 100px">
            <div
              v-if="item.tags[0].tags?.length > 0"
              class="d-flex flex-wrap gap-1 justify-content-center"
            >
              <span v-for="tag in item.tags[0].tags" :key="tag" class="badge text-bg-warning">{{
                tag
              }}</span>
            </div>
            <span class="badge text-bg-warning" v-else>無標籤</span>
          </td>
          <td>{{ item.tags[0].coupon }}</td>
          <td>{{ item.isPublic ? '是' : '否' }}</td>
          <td>{{ timestampToTwTime(item.create_at) }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openEditModal(item)"
              >
                編輯
              </button>
              <button
                @click="openDeleteModal(item)"
                type="button"
                class="btn btn-outline-danger btn-sm"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="text-end mt-auto d-flex align-items-center">
    <!-- pagination -->
    <PaginationComponent :pagination="pagination" @current-page="readArticles" />
    <button class="btn btn-primary ms-auto" @click="openEditModal({})">新增文章</button>
  </div>
  <!-- Modal -->
  <DeleteModalComponent
    :url="`article/${tempArticle.id}`"
    @delete-modal="(modal) => (deleteModal = modal)"
    @read-data="readArticles"
  />
  <ArticleComponent
    :coupons="coupons"
    @read-articles="readArticles"
    :tempArticle="tempArticle"
    @article-modal="(modal) => (editModal = modal)"
  />
</template>

<script>
import { timestampToTwTime } from '@/plugin/utils';

import PaginationComponent from '@/components/PaginationComponent.vue';
import DeleteModalComponent from '@/components/DeleteModalComponent.vue';
import ArticleComponent from '../../components/ArticleComponent.vue';

const { VITE_APP_API_NAME, VITE_APP_API_URL } = import.meta.env;

export default {
  data() {
    return {
      tempArticle: {},
      pagination: [],
      articles: [],
      editModal: null,
      timestampToTwTime,
      coupons: [],
      deleteModal: null,
    };
  },
  methods: {
    openEditModal(item = {}) {
      this.tempArticle = JSON.parse(JSON.stringify(item));
      this.editModal.show();
    },
    openDeleteModal(item = {}) {
      this.tempArticle = JSON.parse(JSON.stringify(item));
      this.deleteModal.show();
    },
    readArticles(page = 1) {
      const loading = this.$loading.show();
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/articles?page=${page}`)
        .then((res) => {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
          loading.hide();
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    readCoupons(currentPage = 1) {
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/coupons?page=${currentPage}`)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  },
  components: { PaginationComponent, DeleteModalComponent, ArticleComponent },
  mounted() {
    this.readArticles();
    this.readCoupons();
  },
};
</script>
