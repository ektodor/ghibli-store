<template>
  <div class="table-responsive-lg">
    <table class="table text-center align-middle table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">標題</th>
          <th scope="col">優惠碼</th>
          <th scope="col">優惠折</th>
          <th scope="col">是否啟用</th>
          <th scope="col">到期日</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item">
          <th scope="row">{{ item.num }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.is_enabled ? '是' : '否' }}</td>
          <td>{{ timestampToTwTime(item.due_date) }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(item)"
              >
                編輯
              </button>
              <button
                @click="openDeleteModal(item)"
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
    <PaginationComponent :pagination="pagination" @current-page="readCoupons" />
    <button @click="openCouponModal({})" class="btn btn-primary ms-auto">建立優惠卷</button>
  </div>
  <!-- Modal -->
  <CouponComponent
    @read-coupons="readCoupons"
    :tempCoupon="tempCoupon"
    @coupon-modal="(modal) => (couponModal = modal)"
  />
  <DeleteModalComponent
    :url="`coupon/${tempCoupon.id}`"
    @delete-modal="(modal) => (deleteModal = modal)"
    @read-data="readCoupons"
  />
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import CouponComponent from '@/components/CouponComponent.vue';
import DeleteModalComponent from '@/components/DeleteModalComponent.vue';
import { timestampToTwTime } from '@/plugin/utils';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      couponModal: null,
      deleteModal: null,
    };
  },
  components: { PaginationComponent, CouponComponent, DeleteModalComponent },
  methods: {
    timestampToTwTime,
    openCouponModal(item = {}) {
      this.tempCoupon = item;
      this.couponModal.show();
    },
    readCoupons(currentPage = 1) {
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/coupons?page=${currentPage}`)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    openDeleteModal(item) {
      this.tempCoupon = item;
      this.deleteModal.show();
    },
  },
  mounted() {
    this.readCoupons();
  },
};
</script>
