<!-- eslint-disable max-len -->
<template>
  <div class="vh-100 d-flex flex-column position-relative">
    <header class="bg-secondary bg-opacity-75 z-1 d-flex gap-2 align-items-center">
      <div class="container-lg">
        <div class="row justify-content-between">
          <div class="col-2 text-center">
            <img
              style="height: 70px"
              class="py-2"
              src="@/assets/ghibli-info-rental.png"
              alt="logo"
            />
          </div>
          <div class="col-9 d-flex gap-2 justify-content-end align-items-center">
            <div class="text-center">
              <RouterLink to="/" class="btn btn-success"
                ><i class="bi bi-house me-lg-1"></i>
                <div class="d-none d-lg-inline">首頁</div></RouterLink
              >
            </div>
            <div class="text-center">
              <RouterLink to="/products" class="btn btn-success"
                ><i class="bi bi-film me-lg-1"></i>
                <div class="d-none d-lg-inline">片單</div></RouterLink
              >
            </div>

            <div class="text-center">
              <RouterLink to="/news" class="btn btn-success"
                ><i class="bi bi-newspaper me-lg-1"></i>
                <div class="d-none d-lg-inline">消息</div></RouterLink
              >
            </div>
            <div class="text-center">
              <RouterLink to="/about" class="btn btn-success"
                ><i class="bi bi-people-fill me-lg-1"></i>
                <div class="d-none d-lg-inline">關於我們</div></RouterLink
              >
            </div>
            <div class="text-center">
              <RouterLink to="/carts" class="btn btn-success position-relative"
                ><i class="bi bi-cart me-lg-1"></i>
                <div class="d-none d-lg-inline">
                  <span
                    v-if="getOrdersNum > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {{ getOrdersNum }} </span
                  >購物車
                </div></RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow-1">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import ordersStore from '@/stores/ordersStore';

const { VITE_APP_API_URL } = import.meta.env;
export default {
  data() {
    return {
      loginState: false,
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
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (!token) {
      this.loginState = false;
      return;
    }
    this.$http.defaults.headers.common.Authorization = token;
    this.$http
      .post(`${VITE_APP_API_URL}/api/user/check`, {})
      .then(() => {
        this.loginState = true;
      })
      .catch(() => {
        this.loginState = false;
      });
  },
};
</script>
