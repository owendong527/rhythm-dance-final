/* eslint-disable import/no-extraneous-dependencies */
// import './assets/main.css';
import './assets/scss/all.scss';
import 'bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import CKEditor from '@ckeditor/ckeditor5-vue';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { date, currency } from '@/methods/filters';

import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});
setLocale('zh_TW');

const app = createApp(App);

// 將【自訂方法】設定所有頁面都能使用，不用每頁都寫
// app.config.globalProperties.$【自訂義】
// 只需要輸入 $filters.data() 就可以執行發法
app.config.globalProperties.$filters = {
  date,
  currency,
};

app.use(createPinia());
app.use(router);
app.use(CKEditor);

app.component('VueLoading', Loading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
