// 解構方法
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import axios from 'axios';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default defineStore('ordersStore', {
  // vue 和 pinia 對應的方法
  // vue : data、methods、computed
  // pinia : state、actions、getters
  state: () => ({
    cart: [],
    loading: null,
    alertInstance: null,
  }),
  actions: {
    // 加入購物車
    addProduct(id, qty = 1, mode = null) {
      this.loading = true;
      axios
        .post(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart`, {
          data: {
            product_id: id,
            qty,
          },
        })
        .then(() => {
          this.getCartProducts();
          this.loading = false;
          Swal.fire({
            title: '恭喜!',
            text: '購物車更新成功',
            icon: 'success',
          });
          if (mode) {
            mode.hide();
          }
        })
        .catch((err) => {
          this.errorMessage(err, '加入購物車失敗');
        });
    },
    // 購物車列表
    getCartProducts() {
      this.loading = true;
      axios
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart`)
        .then((res) => {
          this.cart = JSON.parse(JSON.stringify(res.data.data));
          this.loading = false;
        })
        .catch((err) => {
          this.errorMessage(err, '取得購物車列表失敗');
        });
    },
    // 刪除購物車項目 單一
    deleteProduct(id) {
      this.loading = true;
      axios
        .delete(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart/${id}`)
        .then(() => {
          this.loading = false;
          this.getCartProducts();
          Swal.fire({
            title: '恭喜!',
            text: '購物車更新成功',
            icon: 'success',
          });
        })
        .catch((err) => {
          this.errorMessage(err, '刪除購物車項目失敗 (單一)');
        });
    },
    // 刪除購物車項目 全部
    deleteAllProducts() {
      axios
        .delete(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/carts`)
        .then(() => {
          this.getCartProducts();
          Swal.fire({
            title: '恭喜!',
            text: '購物車更新成功',
            icon: 'success',
          });
        })
        .catch((err) => {
          this.errorMessage(err, '刪除購物車項目失敗 (全部)');
        });
    },
    // 購物車產品數量
    updateCartQuantity(id, productId, qty) {
      axios
        .put(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart/${id}`, {
          data: {
            product_id: productId,
            qty,
          },
        })
        .then(() => {
          this.getCartProducts();
          Swal.fire({
            title: '恭喜!',
            text: '購物車更新成功',
            icon: 'success',
          });
        })
        .catch((err) => {
          this.errorMessage(err, '更改產品數量失敗');
        });
    },
    // 結帳
    checkoutProducts(user, message) {
      axios
        .post(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/order`, {
          data: {
            user,
            message,
          },
        })
        .then(() => {
          this.getCartProducts();
          Swal.fire({
            title: '恭喜!',
            text: '商品已完成結帳',
            icon: 'success',
          });
        })
        .catch((err) => {
          this.errorMessage(err, '結帳失敗');
        });
    },
    // 錯誤資訊
    errorMessage(err, meg) {
      Swal.fire({
        title: '失敗!',
        text: meg,
        icon: 'success',
      });
    },
  },
  getters: {
    getOrdersNum({ cart }) {
      return cart.carts?.length;
    },
  },
});
