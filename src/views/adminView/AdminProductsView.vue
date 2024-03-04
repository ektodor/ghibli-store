<template>
  <!-- <div class="container"> -->
  <table class="table text-center">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in products" :key="index">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-end">{{ item.origin_price }}</td>
        <td class="text-end">{{ item.price }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModal('edit', item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openModal('delete', item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="text-end mt-auto">
    <button class="btn btn-primary" @click="openModal('create')">建立新的產品</button>
  </div>
  <!-- Pagination -->
  <paginationComponent
    :index="index"
    :pagination="pagination"
    @change-page="readProducts"
  ></paginationComponent>
  <!-- Pagination -->
  <!-- </div> -->
  <!-- Modal -->
  <!-- Create and Edit Page -->
  <editProductComponent
    :temp-Product="tempProduct"
    :is-Create-Modal="isCreateModal"
    @read-Products="readProducts"
    @open-modal="(e) => (openEditModal = e)"
  ></editProductComponent>
  <!-- Delete Page -->
  <deleteProductComponent
    :temp-Product="tempProduct"
    @read-Products="readProducts"
    @open-modal="(e) => (openDeleteModal = e)"
  >
  </deleteProductComponent>
  <!-- Modal -->
</template>

<script>
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      isCreateModal: false,
      pagination: {},
      openEditModal: null,
      openDeleteModal: null,
    };
  },
  methods: {
    // 1. 設定開啟新增、編輯、刪除頁面
    openModal(mode, item = {}) {
      this.tempProduct = JSON.parse(JSON.stringify(item));
      //   console.log(this.tempProduct);
      // 刪除的 modal
      if (mode === 'delete') {
        this.openDeleteModal();
        return;
      }
      // 編輯和新增的 modal
      if (mode === 'edit') {
        this.isCreateModal = false;
      } else {
        this.isCreateModal = true;
      }

      // 沒有 imagesUrl 會造成 html 中使用 push 出錯
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
      this.openEditModal();
    },
    //   3. 讀取產品
    readProducts(currentPage) {
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/products?page=${currentPage}`)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.error(err.message);
          alert('讀取資料失敗');
        });
    },
    //   6.確認登入狀態
    // checkLogin() {
    //   var token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    //   this.$http.defaults.headers.common['Authorization'] = token;
    //   this.$http
    //     .post(`${VITE_APP_API_URL}/api/user/check`, {})
    //     .then((res) => {
    //       return;
    //     })
    //     .catch((err) => {
    //       console.error(err.message);
    //       alert('請重新登入');
    //       window.location = './week4_login.html';
    //     });
    // },
  },
  mounted() {
    // this.checkLogin();
    this.readProducts(1);
  },
};
</script>
