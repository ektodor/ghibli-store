<template>
  <div class="vh-100 d-flex flex-column">
    <header class="bg-secondary">
      <div class="container-fluid" style="height: 100px">
        <div class="row h-100 align-items-center">
          <div class="col-2 h-100 text-center">
            <img class="py-3 h-100" src="@/assets/ghibli-info-rental.png" alt="logo" />
          </div>
          <div class="col-10">
            <div class="row justify-content-end">
              <div class="col-auto ms-auto">
                <button class="btn btn-primary">
                  <i class="bi bi-box-arrow-right"></i>
                  登出
                </button>
              </div>
              <div class="col-auto ms-lg-auto d-lg-none">
                <button
                  class="btn btn-primary"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <i class="bi bi-view-list me-1"></i>選單
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-grow-1 py-3 bg-success">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div
            class="offcanvas-lg offcanvas-start col-2"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">選單</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                data-bs-target="#offcanvasExample"
              ></button>
            </div>

            <div class="offcanvas-body justify-content-lg-center">
              <ul class="nav flex-column w-75 text-center mx-auto">
                <li class="nav-item my-2">
                  <RouterLink to="/admin/products" class="nav-link list-hover" aria-current="page"
                    ><i class="bi bi-film me-2"></i>產品管理</RouterLink
                  >
                </li>
                <li class="nav-item my-2">
                  <RouterLink to="/admin/orders" class="nav-link list-hover"
                    ><i class="bi bi-box-seam me-2"></i>訂單管理
                  </RouterLink>
                </li>
                <li class="nav-item my-2">
                  <RouterLink to="/admin/coupons" class="nav-link list-hover"
                    ><i class="bi bi-ticket me-2"></i>優惠卷管理
                  </RouterLink>
                </li>
                <li class="nav-item mt-2">
                  <RouterLink to="/admin/articles" class="nav-link list-hover"
                    ><i class="bi bi-pen me-2"></i>文章管理
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-10 rounded">
            <div class="me-1 pt-1 pb-2 px-2 rounded h-100 bg-white d-flex flex-column">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
const { VITE_APP_API_URL } = import.meta.env;
export default {
  methods: {
    checkLogin() {
      // 確認登入狀態
      // no-useless-escape
      // eslint-disable-next-line no-useless-escape
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      this.$http
        .post(`${VITE_APP_API_URL}/api/user/check`, {})
        .then(() => {})
        .catch((err) => {
          console.error(err.message);
          alert('請重新登入');
          // window.location = './week4_login.html';
        });
    },
  },
  updated() {
    // 每切換頁面，先確認 token 是否錯誤或過期
    // this.checkLogin();
    console.log('updated');
  },
  created() {
    // 每切換頁面，先確認 token 是否錯誤或過期
    // this.checkLogin();
    console.log('created');
  },
};
</script>

<style>
.list-hover {
  border-bottom: 5px solid transparent;
}

.list-hover:hover,
.list-hover:focus {
  border-bottom: 5px solid #8d6e63;
  transition: 1s;
}

.list-hover.active {
  border-bottom: 5px solid #8d6e63;
  transition: 1s;
}
</style>
