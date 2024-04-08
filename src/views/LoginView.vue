<template>
  <div class="login-bg vh-100 position-relative"></div>

  <v-form
    style="max-width: 400px"
    @submit="login"
    v-slot="{ errors }"
    class="p-3 w-75 bg-success position-absolute translate-middle top-50 start-50 rounded-3"
  >
    <div class="w-100 text-center">
      <img class="pb-3" width="150px" src="@/assets/img/ghibli-info-rental.png" alt="logo" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label fw-bold">電子信箱 : </label>
      <v-field
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        rules="email|required"
        placeholder="請輸入電子信箱"
        v-model.trim="email"
      />
      <error-message name="email" class="invalid-feedback"></error-message>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label fw-bold">密碼 : </label>
      <v-field
        placeholder="請輸入密碼"
        type="password"
        class="form-control"
        id="password"
        name="密碼"
        rules="required"
        :class="{ 'is-invalid': errors['密碼'] }"
        v-model="password"
      />
      <error-message name="密碼" class="invalid-feedback"></error-message>
    </div>
    <div class="mb-3 d-flex align-items-center">
      <div class="form-check">
        <input
          :true-value="true"
          :false-value="false"
          v-model="saveInfo"
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
        />
        <label class="form-check-label fw-bold ms-1" for="exampleCheck1">記住信箱與密碼</label>
      </div>
      <button type="submit" class="btn btn-primary ms-auto">登入</button>
    </div>
    <strong ref="message" class="text-danger"></strong>
  </v-form>
</template>

<script>
const { VITE_APP_API_URL } = import.meta.env;
export default {
  data() {
    return {
      email: null,
      password: null,
      saveInfo: true,
    };
  },
  methods: {
    login() {
      this.$refs.message.innerText = '';
      this.$http
        .post(`${VITE_APP_API_URL}/admin/signin`, {
          username: this.email,
          password: this.password,
        })
        .then((res) => {
          if (this.saveInfo) {
            this.storageInfo();
          } else {
            localStorage.clear();
          }
          const { token, expired } = res.data;
          document.cookie = `token=${token};expired=${new Date(expired)}`;
          this.$http.defaults.headers.common.Authorization = token;
          this.$router.push('/admin/products');
        })
        .catch(() => {
          this.$refs.message.innerText = '登入失敗，請確認資訊是否填寫正確';
        });
    },
    storageInfo() {
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      localStorage.setItem('saveInfo', true);
    },
  },
  mounted() {
    this.saveInfo = localStorage.getItem('saveInfo');
    if (this.saveInfo) {
      this.email = localStorage.getItem('email');
      this.password = localStorage.getItem('password');
    }
  },
};
</script>

<style>
.login-bg {
  background-image: url('https://www.ghibli.jp/images/totoro1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.7;
}
</style>
