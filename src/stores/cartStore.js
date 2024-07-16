/* eslint-disable no-console */
import { defineStore } from 'pinia';

import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import router from '@/router';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    final_total: 0,
    total: 0,
    cart: {},
    cartListTotalQty: '',
    isLoading: true,
    form: {
      user: {
        email: '',
        name: '',
        tel: '',
        address: '',
        date: '',
      },
      message: '',
    },
    orderID: '',
  }),

  actions: {
    getCart() { // 此方法從navbar 拉過來
      this.isLoading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          // this.cart = res.data.data;
          this.cart = res.data.data.carts.cart;
          this.carts = res.data.data.carts;
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
          this.cartListTotalQty = res.data.data.carts.reduce((total, cart) => total + cart.qty, 0);
          console.log('pinia cart', res);
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err,
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    // 是從productView 拉過來的
    addToCart(id) {
      this.isLoading = true;
      const order = {
        product_id: id,
        qty: 1,
      };
      axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: order })
        .then((res) => {
          console.log(res);
          // this.product = res.data.product;
          Swal.fire({
            icon: 'success',
            title: '成功加入購物車',
            text: 'Thanks for coming!',
            position: 'top',
            backdrop: 'true',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: true,
            // timer: 1500,
          });
          this.getCart();
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response,
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    onSubmit(form) {
      // console.log(this);
      const currentTime = new Date();
      const currentTimeString = currentTime.toISOString();
      this.form.user.date = currentTimeString;

      const sendData = form;
      this.isLoading = true;
      axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data: sendData })
        .then((res) => {
          this.form = {
            user: {
              email: '',
              name: '',
              tel: '',
              address: '',
            },
            message: '',
          };
          this.orderID = res.data.orderId;
          router.push(`/checkout/${this.orderID}`);
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
});
