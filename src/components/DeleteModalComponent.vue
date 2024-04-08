<template>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>確定要刪除該項目?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteItem">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  data() {
    return {
      modal: null,
    };
  },
  props: ['url'],
  emits: ['delete-modal', 'read-data'],
  methods: {
    deleteItem() {
      this.$http
        .delete(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/${this.url}`)
        .then(() => {
          this.$emit('read-data');
          this.modal.hide();
        })
        .catch((error) => {
          console.error(error.message);
          alert('刪除資料失敗');
        });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.delProductModal);
    this.$emit('delete-modal', this.modal);
  },
};
</script>
