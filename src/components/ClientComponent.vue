<template>
  <v-form ref="form" v-slot="{ errors }" @submit="sendOrder">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <v-field
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        rules="email|required"
        placeholder="請輸入 Email"
        v-model="user.email"
      ></v-field>
      <error-message name="email" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">收件人姓名</label>
      <v-field
        id="name"
        name="姓名"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['姓名'] }"
        placeholder="請輸入姓名"
        rules="required"
        v-model="user.name"
      ></v-field>
      <error-message name="姓名" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="tel" class="form-label">收件人電話</label>
      <v-field
        id="tel"
        name="電話"
        type="tel"
        class="form-control"
        :class="{ 'is-invalid': errors['電話'] }"
        placeholder="請輸入電話"
        :rules="isPhone"
        v-model="user.tel"
      ></v-field>
      <error-message name="電話" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">收件人地址</label>
      <v-field
        id="address"
        name="地址"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['地址'] }"
        placeholder="請輸入地址"
        rules="required"
        v-model="user.address"
      ></v-field>
      <error-message name="地址" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">留言</label>
      <textarea id="message" class="form-control" cols="30" rows="10" v-model="message"></textarea>
    </div>
    <div class="text-end">
      <button type="submit" class="btn btn-danger" :class="{ disabled: !cart?.carts?.length }">
        送出訂單
      </button>
    </div>
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import ordersStore from '@/stores/ordersStore';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
      },
      message: '',
    };
  },
  computed: {
    ...mapState(ordersStore, ['cart']),
  },
  methods: {
    ...mapActions(ordersStore, ['checkoutProducts']),
    sendOrder() {
      this.checkoutProducts(this.user, this.message);
      this.user = {
        name: '',
        email: '',
        tel: '',
        address: '',
      };
      this.message = '';
    },

    //  電話認證
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
};
</script>
