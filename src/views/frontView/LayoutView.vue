<template>
  <div class="vh-100 d-flex flex-column position-relative bg-success">
    <header
      class="bg-primary bg-opacity-50 z-1 d-flex gap-2 align-items-center"
      style="height: 50px"
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-2 text-center">
            <img
              style="height: 50px"
              class="py-1"
              src="@/assets/ghibli-info-rental.png"
              alt="logo"
            />
          </div>
          <div class="col-9 d-flex gap-2 justify-content-end align-items-center">
            <div class="text-center">
              <RouterLink to="/" class="btn btn-outline-success py-1 py-1">首頁</RouterLink>
            </div>
            <div class="text-center">
              <RouterLink to="/about" class="btn btn-outline-success py-1">片單</RouterLink>
            </div>
            <div class="text-center">
              <RouterLink to="/about" class="btn btn-outline-success py-1">購物車</RouterLink>
            </div>
            <div class="text-center">
              <RouterLink to="/about" class="btn btn-outline-success py-1">消息</RouterLink>
            </div>
            <div class="text-center">
              <RouterLink to="/about" class="btn btn-outline-success py-1">關於我們</RouterLink>
            </div>
            <div class="text-center">
              <router-link to="/login" v-if="!loginState" class="btn btn-outline-success py-1"
                >後台登入</router-link
              >
              <router-link to="/admin/products" class="btn btn-outline-success py-1" v-else
                >後台</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow-1 bg-primary">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
const { VITE_APP_API_URL } = import.meta.env;
export default {
  data() {
    return {
      loginState: false,
    };
  },
  mounted() {
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
