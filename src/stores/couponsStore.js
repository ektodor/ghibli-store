import { defineStore } from 'pinia';

import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default defineStore('couponsStore', {
  state: () => ({
    coupons: [],
  }),
  actions: {
    addCoupon(coupon) {
      this.coupons.push(coupon);
      Swal.fire({
        title: '恭喜!',
        text: '新增優惠券成功',
        icon: 'success',
      });
    },
    useCoupon(coupon) {
      axios
        .post(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/coupon`, {
          data: {
            code: coupon,
          },
        })
        .then(() => {
          Swal.fire({
            title: '恭喜!',
            text: '使用優惠券成功',
            icon: 'success',
          });
        })
        .catch(() => {
          Swal.fire({
            title: '失敗!',
            text: '使用優惠券失敗',
            icon: 'error',
          });
        });
    },
  },
});
