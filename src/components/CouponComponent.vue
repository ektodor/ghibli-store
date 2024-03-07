<template>
  <v-form @submit="isCreateModal ? createCoupon() : updateCoupon()" v-slot="{ errors }">
    <div
      ref="modal"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              {{ isCreateCoupon ? '新增優惠卷' : '編輯優惠卷' }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <v-field
                id="title"
                :class="{ 'is-invalid': errors['標題'] }"
                name="標題"
                rules="required"
                type="text"
                class="form-control"
                :value="coupon.title"
                v-model="coupon.title"
              />
              <error-message name="優惠碼" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="code" class="form-label">優惠碼</label>
              <v-field
                id="code"
                :class="{ 'is-invalid': errors['優惠碼'] }"
                name="優惠碼"
                rules="required"
                type="text"
                class="form-control"
                :value="coupon.code"
                v-model="coupon.code"
              />
              <error-message name="優惠碼" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="percent" class="form-label">優惠折</label>
              <v-field
                id="percent"
                :class="{ 'is-invalid': errors['優惠折'] }"
                name="優惠折"
                rules="required"
                type="number"
                max="99"
                min="1"
                class="form-control"
                :value="coupon.percent"
                v-model="coupon.percent"
              />
              <error-message name="優惠折" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <input
                v-model="coupon.is_enabled"
                :true-value="1"
                :false-value="0"
                type="checkbox"
                class="form-check-input me-2 border-3 border"
                id="is_enabled"
              />
              <label class="form-label" for="is_enabled">是否啟用</label>
            </div>
            <div class="mb-3">
              <label for="due_date" class="form-label">到期日</label>
              <VueDatePicker
                id="due_date"
                text-input
                :format="'yyyy/MM/dd HH:mm'"
                v-model="dateFormat"
                :min-date="new Date()"
                :clearable="false"
              />
            </div>
          </div>
          <div class="modal-footer">
            <a type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</a>
            <button type="submit" class="btn btn-primary">儲存</button>
          </div>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      coupon: {},
      modal: null,
      dateFormat: new Date(),
      isCreateCoupon: false,
    };
  },
  props: ['tempCoupon'],
  watch: {
    tempCoupon() {
      this.coupon = JSON.parse(JSON.stringify(this.tempCoupon));
      this.isCreateCoupon = !(Object.keys(this.coupon).length > 0);
      console.log(this.coupon.due_date);
      this.dateFormat = this.isCreateCoupon
        ? this.convertTime(this.coupon.due_date)
        : this.convertTime(new Date().setDate(new Date().getDate() + 7) / 1000);
    },
    dateFormat(newValue) {
      this.coupon.due_date = new Date(newValue).getTime() / 1000;
    },
  },
  methods: {
    convertTime(timestamp) {
      console.log(timestamp);
      return new Date(timestamp * 1000).toLocaleString('zh-TW', { hour12: false });
    },
    createCoupon() {
      console.log(this.coupon);
    },
    updateCoupon() {
      console.log(this.coupon);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.$emit('coupon-modal', this.modal);
  },
};
</script>
