import './assets/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { LoadingPlugin } from 'vue-loading-overlay';

// 外部
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// eslint-disable-next-line object-curly-newline
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';

import * as VeeValidateRules from '@vee-validate/rules';
import * as VeeValidateI18n from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import 'vue-loading-overlay/dist/css/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 內部
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
Object.keys(VeeValidateRules).forEach((rule) => {
  if (rule !== 'default') {
    defineRule(rule, VeeValidateRules[rule]);
  }
});

// Activate the locale
configure({
  generateMessage: VeeValidateI18n.localize({ zh_TW: zhTW }),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});
// 使用 setLocale() 設定環境語言
VeeValidateI18n.setLocale('zh_TW');
app.use(router);
app.use(LoadingPlugin);
app.use(VueAxios, axios);
app.component('VueDatePicker', VueDatePicker);
app.use(VueSweetalert2);

app.mount('#app');
