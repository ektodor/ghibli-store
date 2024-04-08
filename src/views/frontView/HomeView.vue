<!-- eslint-disable max-len -->
<template>
  <div class="home w-100 vh-100 position-absolute top-0">
    <div class="home-banner vh-100 d-flex">
      <router-link
        to="#topic"
        style="--bs-icon-link-transform: translate3d(0, 0.2rem, 0); max-width: 500px"
        class="icon-link icon-link-hover m-auto btn p-4 bg-white bg-opacity-25 d-flex flex-column"
        ><img
          style="height: 70px"
          class="py-2"
          src="@/assets/img/ghibli-info-rental.png"
          alt="logo" />
        <p class="text-start mb-0">我們致力於為用戶提供方便、快捷的租賃體驗。</p>
        <p class="m-0">
          無論是《龍貓》、《魔法公主》、《天空之城》還是其他經典作品，用戶可以輕鬆地租賃和欣賞最喜愛的吉卜力動畫電影，隨時隨地沉浸在這些令人驚嘆的故事和精彩的動畫世界中。
        </p>
        <p>立即加入我們，一同探索吉卜力動畫的奇妙世界吧！</p>
        <i class="bi bi-caret-down fs-1 jumping"></i
      ></router-link>
    </div>
    <div
      class="vh-100 container-lg py-3"
      id="topic"
      style="
        background-image: url('https://www.ghibli.jp/img/totoro.png');
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <div
        class="d-flex justify-content-around align-items-center h-100 flex-column flex-lg-row gap-5"
      >
        <router-link
          to="/products"
          class="icon-link w-50 h-50 icon-link-hover d-flex flex-column rounded-5 justify-content-center btn btn-outline-primary border-3 d-flex align-items-center shadow"
          style="
            /* min-width: 300px;
            height: 300px; */
            --bs-icon-link-transform: translate3d(0, -0.5rem, 0);
          "
        >
          <h2><i class="bi bi-film m-2"></i>強檔片單</h2>
          <i class="bi bi-hand-index-thumb fs-1"></i>
        </router-link>

        <router-link
          to="/news"
          class="icon-link icon-link-hover w-50 h-50 d-flex flex-column rounded-5 justify-content-center btn btn-outline-primary border-3 d-flex align-items-center shadow"
          style="--bs-icon-link-transform: translate3d(0, -0.5rem, 0)"
        >
          <h2><i class="bi bi-fire mx-2"></i>活動消息</h2>
          <i class="bi bi-hand-index-thumb fs-1"></i>
        </router-link>

        <router-link
          to="/about"
          class="icon-link icon-link-hover w-50 h-50 d-flex flex-column rounded-5 justify-content-center btn btn-outline-primary border-3 d-flex align-items-center shadow"
          style="--bs-icon-link-transform: translate3d(0, -0.5rem, 0)"
        >
          <h2>關於我們</h2>
          <i class="bi bi-hand-index-thumb fs-1"></i>
        </router-link>
      </div>
    </div>
    <div class="vh-100 bg-success py-3" id="products">
      <div class="container-lg h-100">
        <h2 class="mt-4"><i class="bi bi-film mx-2"></i>強檔片單</h2>

        <div id="carouselExampleCaptions" class="carousel slide mt-4 border border-3 rounded-5">
          <div class="carousel-indicators">
            <button
              v-for="(item, index) in products"
              :key="item"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              :class="{ active: index == 0 }"
              class="text-bg-primary"
              aria-current="true"
              :data-bs-slide-to="index"
              :aria-label="`Slide ${index + 1}`"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              class="carousel-item"
              v-for="(item, index) in products"
              :key="item"
              :class="{ active: index == 0 }"
            >
              <img
                :src="item?.imagesUrl[0]"
                class="d-block img-fluid w-100 object-fit-cover rounded-5"
                style="height: 80vh"
                :alt="item.title"
              />
              <div class="carousel-caption bg-white bg-opacity-75 rounded-5">
                <h4 class="text-primary">{{ item.title }}</h4>
                <button class="btn btn-outline-primary" @click="openModal(item)">查看詳情</button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="min-vh-100 py-3" id="news">
      <div
        class="container-lg h-100"
        style="
          background-image: url('https://www.ghibli.jp/img/totoro.png');
          background-position: center;
          background-repeat: no-repeat;
        "
      >
        <div class="d-flex flex-column gap-3 justify-content-center h-100">
          <h2 class="text-danger mt-3 mt-lg-3 mb-0"><i class="bi bi-fire mx-2"></i>活動快訊</h2>
          <hr class="m-1" />
          <div class="card" v-for="item in articles" :key="item">
            <h3 class="card-header fs-4 bg-warning bg-opacity-50">
              {{ item.title }}
            </h3>
            <div
              class="card-body"
              style="cursor: pointer"
              @click="() => $router.push(`./news/${item.id}`)"
            >
              <span class="badge text-bg-danger mb-2" v-if="item.num == 1">NEW</span>
              <blockquote class="blockquote mb-0">
                <p>{{ showDescription(item.description) }}</p>
                <p class="blockquote-footer">
                  發布時間
                  <cite title="Source Title">{{ timestampToTwTime(item.create_at) }}</cite>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-secondary bg-opacity-75 p-2 d-flex mt-3">
      <div class="container">
        <div class="row mt-3 justify-content-center">
          <div class="col-12">
            <ul class="nav justify-content-center align-items-center gap-5">
              <li class="nav-item">
                <RouterLink
                  to="/home"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-house me-lg-1"></i>
                  <div class="d-none d-lg-inline">首頁</div></RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/products"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-film me-lg-1"></i>
                  <div class="d-none d-lg-inline">片單</div></RouterLink
                >
              </li>

              <li class="nav-item">
                <RouterLink
                  to="/news"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-newspaper me-lg-1"></i>
                  <div class="d-none d-lg-inline">消息</div></RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/about"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-people-fill me-lg-1"></i>
                  <div class="d-none d-lg-inline">關於我們</div></RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/carts"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-cart me-lg-1"></i>
                  <div class="d-none d-lg-inline">購物車</div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <ul class="nav flex gap-4 justify-content-center align-items-center">
              <li class="nav-item">
                <a
                  target="_blank"
                  href="https://github.com/ektodor?tab=repositories"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-github fs-4"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="mailto:ektoderwang@gmail.com"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-envelope fs-4"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="tel:0912345678"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-telephone fs-4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-3">
          <span class="m-auto col-auto"
            >Copyright<i class="bi bi-c-circle fs-6 mx-2"></i>{{ new Date().getFullYear() }} Tippy
            Wang</span
          >
        </div>
      </div>
    </footer>
  </div>
  <ProductComponent :tempProduct="tempProduct" @modal="(modal) => (detailModal = modal)" />
</template>

<script>
import { timestampToTwTime } from '@/plugin/utils';
import ProductComponent from '@/components/ProductComponent.vue';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      detailModal: null,
      articles: [],
      productStatus: false,
      articleStatus: false,
      loading: null,
    };
  },
  components: { ProductComponent },

  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products?page=1`)
        .then((res) => {
          const data = res.data.products;
          this.products = data.length > 5 ? data.slice(0, 3) : data;
          this.productStatus = true;
          this.hideLoading();
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    // 開啟 Modal
    openModal(item) {
      this.tempProduct = JSON.parse(JSON.stringify(item));
      this.detailModal.show();
    },
    timestampToTwTime,
    getArticles(page = 1) {
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/articles?page=${page}`)
        .then((res) => {
          const data = res.data.articles;
          this.articles = data.length > 5 ? data.slice(0, 3) : data;
          this.articleStatus = true;
          this.hideLoading();
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    showDescription(description) {
      if (description.length > 100) {
        return `${description.substring(0, 97)}...`;
      }
      return description;
    },
    hideLoading() {
      if (this.productStatus && this.articleStatus) {
        this.loading.hide();
      }
    },
  },
  mounted() {
    this.loading = this.$loading.show();
    this.getProducts();
    this.getArticles();
  },
};
</script>

<style>
.home-banner {
  background-image: url('https://www.ghibli.jp/gallery/chihiro043.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.75;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.jumping {
  animation: bounce 1s infinite;
}
</style>
