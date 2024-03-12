<template>
  <!-- v-slot="{ errors }" -->
  <v-form v-slot="{ errors }">
    <div
      id="editOrderModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="editOrderModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content border-0">
          <div class="modal-header bg-secondary">
            <h5 id="editOrderModalLabel" class="modal-title">
              <span>編輯訂單</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="name" class="form-label">姓名</label>
              <v-field
                id="name"
                :class="{ 'is-invalid': errors['姓名'] }"
                name="姓名"
                rules="required"
                type="text"
                class="form-control"
                v-model="order.user.name"
                :value="order.user.name"
              />
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">信箱</label>
              <v-field
                id="email"
                :class="{ 'is-invalid': errors['信箱'] }"
                name="信箱"
                rules="required"
                type="email"
                class="form-control"
                :value="order.user.email"
                v-model="order.user.email"
              />
              <error-message name="信箱" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">電話</label>
              <v-field
                id="tel"
                :class="{ 'is-invalid': errors['電話'] }"
                name="電話"
                rules="required"
                type="tel"
                class="form-control"
                :value="order.user.tel"
                v-model="order.user.tel"
              />
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">地址</label>
              <v-field
                id="address"
                :class="{ 'is-invalid': errors['地址'] }"
                name="地址"
                rules="required"
                type="text"
                class="form-control"
                :value="order.user.address"
                v-model="order.user.address"
              />
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <v-field
                as="textarea"
                id="message"
                :class="{ 'is-invalid': errors['留言'] }"
                name="留言"
                type="text"
                class="form-control"
                :value="order.message"
                v-model="order.message"
              />
              <error-message name="留言" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3" :key="index" v-for="(item, index) in order.products">
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img :src="item.product.imageUrl" alt="img" style="max-width: 100px" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.product.title }}</h5>
                      <input
                        :id="index"
                        type="number"
                        min="1"
                        class="form-control"
                        :value="item.qty"
                        v-model="item.qty"
                      />
                      <a class="btn btn-warning mt-2" @click.prevent="deleteItem(item.id)">刪除</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <input
                v-model="order.is_paid"
                :true-value="true"
                :false-value="false"
                type="checkbox"
                class="form-check-input me-2 border-3 border"
                id="is_paid"
              />
              <label class="form-label" for="is_paid">是否付款</label>
            </div>
          </div>
          <div class="modal-footer">
            <a type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"> 取消 </a>
            <button type="submit" class="btn text-dark btn-success" @click.prevent="updateOrder">
              更新
            </button>
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
      modal: null,
      order: {
        user: {},
        product: {},
      },
    };
  },
  emits: ['order-modal', 'read-data'],
  props: ['tempOrder'],
  watch: {
    tempOrder() {
      this.order = this.tempOrder;
    },
  },
  methods: {
    updateOrder() {
      console.log('updateOrder');
      this.$http
        .put(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${this.order.id}`, {
          order: this.order,
        })
        .then((res) => {
          console.log(res.data);
          this.$emit('read-data');
        })
        .catch((err) => {
          console.dir(err.message);
        });
    },
    deleteItem(id) {
      delete this.order.products[id];
      console.log(this.order);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.$emit('order-modal', this.modal);
  },
};
</script>
