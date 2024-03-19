<template>
  <div class="container-lg">
    <div class="d-flex align-items-center gap-2 justify-content-end mt-3">
      <input
        class="form-control me-2 me-lg-0 w-50 border border-4"
        type="search"
        placeholder="搜尋"
        aria-label="Search"
        v-model="search"
      />
    </div>
    <div class="mt-3" v-for="(item, index) in sortProudcts" :key="index">
      <h3 class="mb-3"><i class="bi bi-caret-right-square me-2"></i>{{ item.category }}</h3>
      <div class="d-flex flex-wrap gap-4 justify-content-lg-start justify-content-center">
        <div class="card" style="width: 250px" v-for="product in item.products" :key="product">
          <img
            :src="product.imageUrl"
            class="card-img-top"
            :alt="product.title"
            style="height: 300px"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">
              {{ showDescription(product.description) }}
            </p>
            <div class="text-center mt-auto">
              <button class="btn btn-primary w-75" @click="openModal(product)">查看影片</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
  <ProductComponent :tempProduct="tempProduct" @modal="(modal) => (detailModal = modal)" />
</template>

<script>
import ProductComponent from '@/components/ProductComponent.vue';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default {
  data() {
    return {
      showProducts: [],
      allProudcts: [],
      pagination: {},
      search: '',
      category: [],
      detailModal: null,
      tempProduct: {},
    };
  },
  components: { ProductComponent },
  watch: {
    search(newVaule) {
      this.showProducts = this.allProudcts.filter((item) => item.title.includes(newVaule));
    },
  },
  computed: {
    sortProudcts() {
      const sortProducts = this.category.map((item) => {
        const products = this.showProducts.filter((product) => product.category === item);
        return {
          category: item,
          products,
        };
      });
      return sortProducts;
    },
  },
  methods: {
    getAllProducts() {
      const loading = this.$loading.show();
      this.$http.get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products/all`).then((res) => {
        this.allProudcts = res.data.products;
        this.category = [...new Set(this.allProudcts.map((item) => item.category))];
        this.showProducts = this.allProudcts;
        loading.hide();
      });
    },
    showDescription(description) {
      if (description.length > 50) {
        return `${description.substring(0, 47)}...`;
      }
      return description;
    },
    // 開啟 Modal
    openModal(item) {
      this.tempProduct = JSON.parse(JSON.stringify(item));
      this.detailModal.show();
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>
