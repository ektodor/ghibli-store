<!-- eslint-disable max-len -->
<template>
  <div class="container-lg d-flex flex-column gap-3 h-100 py-4">
    <div class="row h-100">
      <div class="col-lg-6 d-flex align-items-center justify-content-center" v-if="article.image">
        <img
          class="object-fit-cover border rounded"
          style="max-width: 500px"
          :src="article.image"
          alt="image"
        />
      </div>
      <div class="d-flex flex-column mt-4" :class="article.image ? 'col-lg-6' : 'col-12'">
        <div class="d-flex">
          <h2><i class="bi bi-balloon text-danger"></i>{{ article.title }}</h2>
          <div class="align-items-center d-flex" v-if="article.tags">
            <span
              class="badge text-bg-warning ms-3"
              v-for="item in article.tags[0]?.tags"
              :key="item"
              >{{ item }}</span
            >
          </div>
        </div>
        <p class="mt-3">{{ article.description }}</p>

        <div
          class="input-group mt-auto ms-auto"
          style="max-width: 500px"
          v-if="article.title && article.tags[0].coupon !== '無優惠卷'"
        >
          <span class="input-group-text" id="inputGroup-sizing-default">本次活動優惠碼</span>
          <input type="text" class="form-control" disabled :value="article.tags[0]?.coupon" />

          <button class="btn btn-warning">儲存優惠卷</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  data() {
    return {
      article: {},
    };
  },
  props: ['id'],
  methods: {
    getArticle() {
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/article/${this.id}`)
        .then((res) => {
          this.article = res.data.article;
          console.log(this.article);
        });
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
