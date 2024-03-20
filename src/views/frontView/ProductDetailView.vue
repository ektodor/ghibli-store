<!-- eslint-disable max-len -->
<template>
  <div class="container h-100 d-flex">
    <div class="row my-auto py-5 px-3">
      <div class="col-lg-5 mt-3 mt-lg-0 d-flex align-items-center">
        <img
          :src="product.imageUrl"
          style="max-height: 500px"
          class="d-block mx-auto img_shadow"
          :alt="product.title"
        />
      </div>
      <div class="col-lg-7">
        <nav class="mb-2 mt-5 mt-lg-0" aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-muted">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products" class="text-muted">片單</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">詳細內容</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-2 mt-3 mt-lg-0">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <blockquote>{{ product.content }}</blockquote>
        <p class="mb-0 text-muted text-end mt-2 mt-lg-0">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end mt-2 mt-lg-0">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-primary border-0 py-2"
                  type="button"
                  id="button-addon1"
                  @click="() => (tempQty > 1 ? tempQty-- : tempQty)"
                >
                  <i class="bi bi-dash-circle"></i>
                </button>
              </div>
              <input
                type="number"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder=""
                v-model.number="tempQty"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-primary border-0 py-2"
                  type="button"
                  id="button-addon2"
                  @click="() => tempQty++"
                >
                  <i class="bi bi-plus-circle"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button
              class="text-nowrap btn btn-primary w-100 py-2"
              @click="addOrder(product.id, tempQty)"
            >
              新增商品
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import ordersStore from '@/stores/ordersStore';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  data() {
    return {
      product: {},
      tempQty: 1,
    };
  },
  props: ['id'],
  methods: {
    getProduct() {
      const loading = this.$loading.show();
      this.$http
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/product/${this.id}`)
        .then((res) => {
          this.product = res.data.product;
          loading.hide();
        });
    },
    ...mapActions(ordersStore, ['addProduct']),
    addOrder(id, tempQty) {
      this.addProduct(id, tempQty);
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style>
.img_shadow {
  box-shadow: 13px 13px 22px #706f6f;
  -webkit-box-shadow: 13px 13px 22px #706f6f;
  -moz-box-shadow: 13px 13px 22px #706f6f;
}
</style>
