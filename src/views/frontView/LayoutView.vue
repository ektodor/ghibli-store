<!-- eslint-disable max-len -->
<template>
  <div class="d-flex flex-column position-relative h-100">
    <header
      :class="this.$route.fullPath == '/' ? ' fixed-top ' : 'sticky-top'"
      class="bg-secondary bg-opacity-75 z-1 d-flex gap-2 align-items-center"
    >
      <div class="container-lg">
        <div class="justify-content-between navbar navbar-expand-lg">
          <router-link to="/">
            <h1>
              <img
                style="height: 70px"
                class="py-2"
                src="@/assets/img/ghibli-info-rental.png"
                alt="logo"
              />
            </h1>
          </router-link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul
              class="ms-auto w-50 navbar-nav p-3 d-flex justify-content-end justify-content-lg-end align-items-center gap-2 flex-row"
            >
              <!-- <li class="nav-item">
                <RouterLink to="/home" class="btn btn-success"
                  ><i class="bi bi-house me-lg-1"></i>
                  <div class="d-none d-lg-inline">首頁</div></RouterLink
                >
              </li> -->
              <li class="nav-item">
                <RouterLink to="/products" class="btn btn-success"
                  ><i class="bi bi-film me-lg-1"></i>
                  <div class="d-none d-lg-inline">片單</div></RouterLink
                >
              </li>

              <li class="nav-item">
                <RouterLink to="/news" class="btn btn-success"
                  ><i class="bi bi-newspaper me-lg-1"></i>
                  <div class="d-none d-lg-inline">消息</div></RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink to="/about" class="btn btn-success"
                  ><i class="bi bi-people-fill me-lg-1"></i>
                  <div class="d-none d-lg-inline">關於我們</div></RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink to="/carts" class="btn btn-success position-relative"
                  ><i class="bi bi-cart me-lg-1"></i>
                  <div class="d-none d-lg-inline">購物車</div>
                  <span
                    v-if="getOrdersNum > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {{ getOrdersNum }}
                  </span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow-1">
      <router-view></router-view>
    </main>

    <footer v-if="this.$route.fullPath !== '/'" class="bg-secondary bg-opacity-75 p-2 d-flex mt-3">
      <div class="container">
        <div class="row mt-3 justify-content-center">
          <div class="col-12">
            <ul class="nav justify-content-center align-items-center gap-5">
              <!-- <li class="nav-item">
                <RouterLink
                  to="/home"
                  class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  ><i class="bi bi-house me-lg-1"></i>
                  <div class="d-none d-lg-inline">首頁</div></RouterLink
                >
              </li> -->
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
</template>

<script>
import { mapState, mapActions } from 'pinia';
import ordersStore from '@/stores/ordersStore';

// const { VITE_APP_API_URL } = import.meta.env;
export default {
  data() {
    return {
      loginState: false,
      router: null,
    };
  },
  computed: {
    ...mapState(ordersStore, ['getOrdersNum']),
  },
  methods: {
    ...mapActions(ordersStore, ['getCartProducts']),
  },
  mounted() {
    this.getCartProducts();
  },
};
</script>
