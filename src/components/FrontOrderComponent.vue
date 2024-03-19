<template>
  <div>
    <button
      @click="deleteAllProducts"
      class="btn btn-danger mb-3"
      :class="{ disabled: !cart?.carts?.length }"
      type="button"
    >
      清空購物車
    </button>
    <div class="table-responsive-lg">
      <table class="table align-middle">
        <thead class="table-primary">
          <tr>
            <th></th>
            <th class="text-center">品名</th>
            <th class="text-center" style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  @click="deleteProduct(item.id)"
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                >
                  <i class="fas fa-spinner fa-pulse"></i>
                  x
                </button>
              </td>
              <td class="text-center">
                {{ item.product.title }}
                <div class="text-success">
                  {{ coupon != '無優惠卷' ? '已套用優惠券' : '尚未套用優惠卷' }}
                </div>
              </td>
              <td class="text-center">
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input
                      v-model.number="item.qty"
                      min="1"
                      type="number"
                      class="form-control"
                      @blur="updateCartQuantity(item.id, item.product.id, item.qty)"
                    />
                    <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small class="text-danger text-decoration-line-through"
                  >原價：{{ item.total }}</small
                >

                <br />
                <small class="text-success">折扣價：</small>
                {{ item.final_total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end"></td>

            <td class="text-end" style="max-width: 100px">
              <select v-model="coupon" class="form-control border-3 border" id="coupons">
                <option selected value="無優惠卷" disabled>請選擇搭配優惠卷</option>
                <option v-for="item in coupons" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ cart.total }}</td>
          </tr>
          <tr>
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <loading v-model:active="loading" :is-full-page="fullPage" />
</template>

<script>
// const { VITE_APP_URL, VITE_APP_API_NAME } = import.meta.env;
import { mapState, mapActions } from 'pinia';
import ordersStore from '@/stores/ordersStore';
import couponsStore from '@/stores/couponsStore';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  data() {
    return {
      fullPage: true,
      coupon: '無優惠卷',
    };
  },
  methods: {
    ...mapActions(ordersStore, [
      'getCartProducts',
      'deleteAllProducts',
      'deleteProduct',
      'updateCartQuantity',
    ]),
    ...mapActions(couponsStore, ['useCoupon']),
  },
  computed: {
    ...mapState(ordersStore, ['cart', 'loading']),
    ...mapState(couponsStore, ['coupons']),
  },
  watch: {
    async coupon() {
      await this.useCoupon(this.coupon);
      await this.getCartProducts();
    },
  },
  components: {
    Loading,
  },
  emits: ['loading'],
};
</script>
