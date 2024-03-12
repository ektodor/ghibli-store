<template>
  <v-form @submit="isCreateModal ? createPrdouct() : updatePrdouct()" v-slot="{ errors }">
    <div
      ref="editModal"
      class="modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
              {{ isCreateModal ? '新增產品' : '編輯產品' }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card mb-3 m-auto" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="product.imageUrl" class="img-fluid rounded-start" alt="photo" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">主要圖片</h5>
                    <label for="imageUrl" class="form-label card-text"
                      ><small class="text-muted">輸入圖片網址</small></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="product.imageUrl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <v-field
                id="title"
                name="標題"
                rules="required"
                :class="{ 'is-invalid': errors['標題'] }"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
                v-model="product.title"
              />
              <error-message name="標題" class="invalid-feedback"></error-message>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="category" class="form-label">分類</label>
                <v-field
                  id="category"
                  name="分類"
                  rules="required"
                  :class="{ 'is-invalid': errors['分類'] }"
                  type="text"
                  class="form-control"
                  placeholder="請輸入分類"
                  v-model="product.category"
                />
                <error-message name="分類" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">單位</label>
                <v-field
                  id="unit"
                  name="單位"
                  rules="required"
                  :class="{ 'is-invalid': errors['單位'] }"
                  type="text"
                  class="form-control"
                  placeholder="請輸入單位"
                  v-model="product.unit"
                />
                <error-message name="單位" class="invalid-feedback"></error-message>
              </div>
            </div>

            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="origin_price" class="form-label">原價</label>
                <v-field
                  id="origin_price"
                  name="原價"
                  rules="required"
                  :class="{ 'is-invalid': errors['原價'] }"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="請輸入原價"
                  v-model.number="product.origin_price"
                />
                <error-message name="原價" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">售價</label>
                <v-field
                  id="price"
                  name="售價"
                  rules="required"
                  :class="{ 'is-invalid': errors['售價'] }"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="請輸入售價"
                  v-model.number="product.price"
                />
                <error-message name="售價" class="invalid-feedback"></error-message>
              </div>
            </div>
            <hr />

            <div class="mb-3">
              <label for="description" class="form-label">產品描述</label>
              <textarea
                id="description"
                type="text"
                class="form-control"
                placeholder="請輸入產品描述"
                v-model="product.description"
              >
              </textarea>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">說明內容</label>
              <textarea
                id="description"
                type="text"
                class="form-control"
                placeholder="請輸入說明內容"
                v-model="product.content"
              >
              </textarea>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  id="is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="product.is_enabled"
                />
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
              編輯圖片
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="imgModal"
      class="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">圖片編輯</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex flex-wrap justify-content-evenly">
            <div
              class="card mb-3"
              style="width: 350px"
              v-for="(item, index) in product.imagesUrl"
              :key="index"
            >
              <div class="row g-0">
                <img style="min-height: 200px" :src="item" class="card-img-top" alt="photo" />

                <div class="card-body">
                  <h5 class="card-title">補充圖片</h5>
                  <label :for="'補充圖片-' + (index + 1)" class="form-label card-text"
                    ><small class="text-muted">輸入圖片網址</small></label
                  >
                  <input
                    :id="'補充圖片-' + (index + 1)"
                    type="text"
                    class="form-control mb-2"
                    placeholder="請輸入圖片連結"
                    v-model="product.imagesUrl[index]"
                  />
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="product.imagesUrl.splice(index, 1)"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              class="btn btn-outline-primary btn-sm d-block w-100"
              @click="
                () => {
                  product.imagesUrl.push('');
                }
              "
            >
              新增圖片
            </a>
            <a class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
              返回
            </a>
            <button type="submit" class="btn btn-primary">儲存資料</button>
          </div>
        </div>
      </div>
    </div>
  </v-form>
</template>
<script>
import { Modal } from 'bootstrap';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  data() {
    return {
      product: {},
      editModal: null,
    };
  },
  methods: {
    openModal() {
      this.editModal.show();
    },
    createPrdouct() {
      this.product.imagesUrl = this.product.imagesUrl.filter((data) => data !== '');
      this.$http
        .post(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/product`, {
          data: this.product,
        })
        .then(() => {
          this.$emit('read-products');
          this.editModal.hide();
          this.imgModal.hide();
        })
        .catch((err) => {
          console.error(err.message);
          alert('新增失敗');
        });
    },
    // 更新產品
    updatePrdouct() {
      this.$http
        .put(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/product/${this.tempProduct.id}`, {
          data: this.product,
        })
        .then(() => {
          this.$emit('read-products');
          this.editModal.hide();
          this.imgModal.hide();
        })
        .catch((err) => {
          console.error(err.message);
          alert('更新失敗');
        });
    },
  },
  watch: {
    tempProduct() {
      this.product = JSON.parse(JSON.stringify(this.tempProduct));
      // 沒有 imagesUrl 會造成 html 中使用 push 出錯
      if (!this.product.imagesUrl) {
        this.product.imagesUrl = [];
      }
    },
  },
  props: ['tempProduct', 'isCreateModal'],
  emits: ['edit-modal', 'read-products'],
  mounted() {
    this.editModal = new Modal(this.$refs.editModal);
    this.imgModal = new Modal(this.$refs.imgModal);
    this.$emit('edit-modal', this.editModal);
  },
};
</script>
