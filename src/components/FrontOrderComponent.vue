<template>
  <div>
    <div class="d-flex align-items-center my-3">
      <select
        :disabled="!(cart.total == cart.final_total)"
        v-model="coupon"
        class="form-control border-3 border w-50"
        style="max-width: 200px"
        id="coupons"
      >
        <option selected value="無優惠卷" disabled>
          {{ cart.total == cart.final_total ? '請選擇搭配優惠卷' : '已使用過優惠卷' }}
        </option>
        <option v-for="item in coupons" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <small class="text-danger align-self-end ms-2">優惠卷可以至消息內容中領取!!!</small>

      <button
        @click="deleteAllProducts"
        class="btn btn-danger ms-auto"
        :class="{ disabled: !cart?.carts?.length }"
        type="button"
      >
        清空購物車
      </button>
    </div>
    <div class="table-responsive-lg border-black border">
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
                <div style="color: rgb(92 87 85)">
                  {{ item.total != item.final_total ? '已套用優惠券' : '尚未套用優惠卷' }}
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
                <small style="color: rgb(92 87 85)">折扣價：</small>
                {{ item.final_total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ cart.total }}</td>
          </tr>
          <tr>
            <td colspan="3" style="color: rgb(92 87 85)" class="text-end">折扣價</td>
            <td class="text-end" style="color: rgb(92 87 85)">{{ cart.final_total }}</td>
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
