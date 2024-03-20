<template>
  <div class="container h-100">
    <div
      class="row my-2 p-lg-5 p-1 rounded-3 justify-content-center justify-content-lg-between"
      v-if="cart?.carts?.length > 0"
    >
      <div class="text-end p-0 col-lg-6">
        <FrontOrderComponent />
      </div>
      <div class="col-lg-5 row justify-content-center p-4 my-4 border-black border rounded-3">
        <ClientComponent />
      </div>
    </div>
    <div class="h-100 d-flex justify-content-center align-items-center" v-else>
      <div class="border p-4 mb-4">
        <h2 class="text-danger fw-bold">目前購物車為空</h2>
        <hr class="my-4" />
        <button class="btn btn-primary w-100" @click="() => $router.push('/products')">
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
