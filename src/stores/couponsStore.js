import { defineStore } from 'pinia';

import axios from 'axios';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default defineStore('couponsStore', {
  state: () => ({
    coupons: [],
  }),
  actions: {
    addCoupon(coupon) {
      this.coupons.push(coupon);
      alert('新增優惠券成功');
    },
    useCoupon(coupon) {
      axios
        .post(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/coupon`, {
          data: {
            code: coupon,
          },
        })
        .then(() => {
          alert('使用優惠券成功');
        })
        .catch((err) => {
          this.errorMessage(err, '使用優惠券失敗');
        });
    },
  },
});
