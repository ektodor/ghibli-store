<template>
  AdminArticleView
  <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
  <router-link to="/login" v-if="!loginState">登入</router-link>
  <router-link to="/admin/products" v-else>後台頁面</router-link>
  <hr />
  <router-view></router-view>
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
