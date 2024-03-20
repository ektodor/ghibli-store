<!-- eslint-disable max-len -->
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
    <div class="container mt-lg-5 mt-3 mb-7">
      <div class="row">
        <div class="col-lg-3">
          <div
            class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
            id="accordionExample"
          >
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
                id="headingOne"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">導演分類</h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body py-0">
                  <ul class="list-unstyled d-flex d-lg-block gap-4">
                    <li>
                      <a
                        style="cursor: pointer"
                        @click="() => (currentCategory = '')"
                        class="py-2 d-block text-muted"
                        >所有片單</a
                      >
                    </li>
                    <li v-for="item in category" :key="item">
                      <a
                        style="cursor: pointer"
                        class="py-2 d-block text-muted"
                        @click="() => (currentCategory = item)"
                        >{{ item }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <!-- <div class="row"> -->
          <div class="d-flex flex-wrap justify-content-around gap-3">
            <div
              class="card"
              style="width: 280px"
              v-for="(product, index) in sortProudcts"
              :key="index"
            >
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
                  <button
                    class="btn btn-primary w-75"
                    @click="() => $router.push(`/products/${product.id}`)"
                  >
                    查看影片
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
      currentCategory: '',
    };
  },
  watch: {
    search(newVaule) {
      this.showProducts = this.allProudcts.filter((item) => item.title.includes(newVaule));
    },
  },
  computed: {
    sortProudcts() {
      const sortProducts = this.showProducts.filter(
        (item) => item.category === this.currentCategory,
      );
      return sortProducts.length > 0 ? sortProducts : this.showProducts;
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
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>
