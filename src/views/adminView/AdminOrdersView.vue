<template>
  <div class="table-responsive-lg">
    <table class="table text-center align-middle">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="min-width: 250px">訂單編號</th>
          <th scope="col" style="min-width: 100px">訂購人</th>
          <th scope="col" style="min-width: 100px">訂單金額</th>
          <th scope="col" style="min-width: 100px">是否付款</th>
          <th scope="col" style="min-width: 200px">訂購日期</th>
          <th scope="col" style="min-width: 150px">訂單資訊</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item">
          <th scope="row">{{ item.num }}</th>
          <td>{{ item.id }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.is_paid ? '是' : '否' }}</td>
          <td>{{ timestampToTwTime(item.create_at) }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openEditModal(item)"
              >
                編輯
              </button>
              <button
                @click.prevent="openDeleteModal(item)"
                type="button"
                class="btn btn-outline-danger btn-sm"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="text-end mt-auto d-flex align-items-center">
    <!-- pagination -->
    <PaginationComponent :pagination="pagination" @current-page="readOrders" />

    <button
      :disabled="orders.length < 1"
      type="button"
      class="btn btn-primary ms-auto"
      @click.prevent="deleteAllOrders"
    >
      刪除所有訂單
    </button>
  </div>
  <!-- Modal -->
  <OrderComponent
    @read-data="readOrders"
    @order-modal="(modal) => (editModal = modal)"
    :tempOrder="tempOrder"
  />
  <DeleteModalComponent
    :url="`order/${tempOrder.id}`"
    @delete-modal="(modal) => (deleteModal = modal)"
    @read-data="readOrders"
  />
</template>

<script>
import { timestampToTwTime } from '@/plugin/utils';
import PaginationComponent from '@/components/PaginationComponent.vue';
import OrderComponent from '@/components/OrderComponent.vue';
import DeleteModalComponent from '@/components/DeleteModalComponent.vue';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      editModal: null,
      timestampToTwTime,
      deleteModal: null,
    };
  },
  components: { PaginationComponent, OrderComponent, DeleteModalComponent },
  methods: {
    openEditModal(item) {
      this.tempOrder = JSON.parse(JSON.stringify(item));
      this.editModal.show();
    },
    openDeleteModal(item) {
      this.tempOrder = JSON.parse(JSON.stringify(item));
      this.deleteModal.show();
    },
    readOrders(page = 1) {
      const loading = this.$loading.show();
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          loading.hide();
        })
        .catch((err) => {
          console.err(err.message);
        });
    },
    deleteAllOrders() {
      this.$http
        .delete(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/orders/all`)
        .then(() => {
          this.readOrders();
        })
        .catch((err) => {
          console.err(err.message);
        });
    },
  },
  mounted() {
    this.readOrders();
  },
};
</script>
