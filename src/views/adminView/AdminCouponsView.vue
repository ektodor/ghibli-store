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
          <td>{{ convertTime(item.due_date) }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(item)"
              >
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm">刪除</button>
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
  <CouponComponent :tempCoupon="tempCoupon" @coupon-modal="(modal) => (couponModal = modal)" />
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import CouponComponent from '@/components/CouponComponent.vue';

const data = {
  success: true,
  coupons: [
    {
      code: 'EventDiscounts',
      due_date: 1735649953,
      id: '-NsNZjs90GblEq8wziBo',
      is_enabled: 1,
      percent: 80,
      title: '活動特惠價格',
      num: 1,
    },
  ],
  pagination: {
    total_pages: 1,
    current_page: 1,
    has_pre: false,
    has_next: false,
    category: '',
  },
  messages: [],
};
export default {
  data() {
    return {
      date: this.convertTime(1735649953),
      coupons: data.coupons,
      pagination: data.pagination,
      tempCoupon: {},
      couponModal: null,
    };
  },
  components: { PaginationComponent, CouponComponent },
  methods: {
    convertTime(timestamp) {
      return new Date(timestamp * 1000).toLocaleString('zh-TW', { hour12: false });
    },
    openCouponModal(item = {}) {
      this.tempCoupon = item;
      this.couponModal.show();
    },
    readCoupons() {},
  },
};
</script>
