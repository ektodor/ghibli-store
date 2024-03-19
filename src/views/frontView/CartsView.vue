<template>
  <div class="container-lg h-100">
    <div
      class="row my-2 p-lg-5 p-1 rounded-3 justify-content-center justify-content-lg-between"
      v-if="cart?.carts?.length > 0"
    >
      <div class="text-end col-lg-6">
        <FrontOrderComponent @next-process="(step) => (process = process + step)" />
      </div>

      <div class="col-lg-5 row justify-content-center bg-success p-3 rounded-3">
        <ClientComponent />
      </div>
    </div>
    <div v-else class="h-100 d-flex justify-content-center align-items-center">
      <div class="bg-success bg-opacity-50 p-5 rounded-3 text-center">
        <h2 class="text-danger fw-bold">目前購物車為空</h2>
        <button class="btn btn-warning w-100 mt-3 fs-5" @click="() => $router.push('/products')">
          <i class="bi bi-cursor me-2"></i>查看片單
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FrontOrderComponent from '@/components/FrontOrderComponent.vue';
import ClientComponent from '@/components/ClientComponent.vue';
import { mapState, mapActions } from 'pinia';
import ordersStore from '@/stores/ordersStore';
// const { VITE_APP_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  computed: {
    ...mapState(ordersStore, ['cart']),
  },
  methods: {
    ...mapActions(ordersStore, ['getCartProducts']),
  },
  components: { FrontOrderComponent, ClientComponent },
  mounted() {
    this.getCartProducts();
  },
};
</script>
