<template>
  <!-- <div class="container"> -->
  <table class="table text-center align-middle">
    <thead>
      <tr>
        <th>分類</th>
        <th>產品圖片</th>
        <th>產品名稱</th>
        <th>原價</th>
        <th>售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in products" :key="index">
        <td class="my-auto">{{ item.category }}</td>
        <td><img style="width: 50px" :src="item.imageUrl" alt="image" /></td>
        <td>{{ item.title }}</td>
        <td class="text-center">{{ item.origin_price }}</td>
        <td class="text-center">{{ item.price }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openEditModal('edit', item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="text-end mt-auto d-flex align-items-center">
    <!-- pagination -->
    <PaginationComponent :pagination="pagination" @current-page="readProducts" />
    <button @click="openEditModal('create')" class="btn btn-primary ms-auto">建立新的產品</button>
  </div>
  <!-- Modal -->
  <EditModalComponent
    @edit-modal="(modal) => (editModal = modal)"
    :tempProduct="tempProduct"
    :is-create-modal="isCreateModal"
    @read-products="readProducts"
  />

  <DeleteModalComponent
    :url="`product/${tempProduct.id}`"
    @delete-modal="(modal) => (deleteModal = modal)"
    @read-data="readProducts"
  />
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import EditModalComponent from '@/components/EditModalComponent.vue';
import DeleteModalComponent from '@/components/DeleteModalComponent.vue';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      isCreateModal: false,
      pagination: {},
      editModal: null,
      deleteModal: null,
    };
  },
  methods: {
    openDeleteModal(item) {
      this.tempProduct = JSON.parse(JSON.stringify(item));
      this.deleteModal.show();
    },
    // 設定開啟新增、編輯、刪除頁面
    openEditModal(mode, item = {}) {
      this.tempProduct = JSON.parse(JSON.stringify(item));
      // 編輯和新增的 modal
      if (mode === 'edit') {
        this.isCreateModal = false;
      } else {
        this.isCreateModal = true;
      }
      this.editModal.show();
    },
    // 讀取產品
    readProducts(currentPage = 1) {
      const loading = this.$loading.show();
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/products?page=${currentPage}`)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          loading.hide();
        })
        .catch((err) => {
          console.error(err.message);
          alert('讀取資料失敗');
        });
    },
  },
  components: { PaginationComponent, EditModalComponent, DeleteModalComponent },
  mounted() {
    this.readProducts();
  },
};
</script>
