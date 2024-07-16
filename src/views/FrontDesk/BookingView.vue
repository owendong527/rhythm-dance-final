<template>
  <VueLoading v-if="isLoading" :active="isLoading" :can-cancel="false" />
  <FlowChart :outProgress="0" />
  <div class="container my-4">
    <div class="my-5 row justify-content-center">
      <div class="col-lg-6">
        <h4 class="text-center">購物車資訊</h4>
        <hr />
        <div v-if="carts.length < 0" class="text-center my-5">
          <p class="fs-4 fw-bold">
            目前購物車無任何商品Q_Q<br />趕快來去選購吧
          </p>
          <router-link to="/products" class="btn btn-lg btn-success"
            >選購商品
          </router-link>
        </div>
        <div v-for="cItem in carts" :key="cItem.id" class="row mb-3" v-else>
          <div class="col-md-4">
            <img
              :src="cItem.product.imageUrl"
              alt="product-img"
              class="img-fluid object-fit-cover h-100"
            />
          </div>
          <div class="col-md-8 d-flex justify-content-between align-items-center my-3 my-lg-0"
          >
            <div class="d-flex justify-content-between flex-lg-column">
              <div class="mt-3">
                <h5>{{ cItem.product.title }}</h5>
                <p class="mt-3 mt-lg-0">單價：NT$ {{ cItem.product.price }}</p>
                <p class="mt-lg-0">小計：NT$ {{ cItem.total }}</p>
              </div>
            </div>
            <div class="d-flex">
              <div class="input-group mb-3" style="max-width: 150px; max-height: 20px;">
                <button
                  v-if="cItem.qty > 1"
                  class="fs-4 btn btn-sm btn-secondary border-0"
                  type="button"
                  @click="
                    cItem.qty--;
                    changeQty(cItem, cItem.qty);
                  "
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <input
                  type="number"
                  class="form-control text-center"
                  readonly
                  :value="cItem.qty"
                />
                <button
                  class="fs-4 btn btn-sm btn-secondary border-0"
                  type="button"
                  @click="
                    cItem.qty++;
                    changeQty(cItem, cItem.qty);
                  "
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
              <div class="ms-3 d-flex flex-column justify-content-center">
                <button type="button" class="bg-white border-0"
                @click="delCart(cItem.id)">
                <i class="bi bi-trash3 fs-3"></i>
            <!-- <font-awesome-icon icon="spinner" class="fa-spin" v-show="cartLoading"/> -->
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-md-6 my-3">
            <div class="input-group my-auto">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入折扣碼"
                aria-label="請輸入折扣碼"
                aria-describedby="inputGroup-sizing-sm"
                v-model="coupon_code"
              />
              <button
                class="btn btn-outline-success"
                type="button"
                id="inputGroup-sizing-sm2"
                @click="addCouponCode"
              >
                套用
              </button>
            </div>
          </div>
          <div class="col-md-6 my-3">
            <div v-if="coupon_code" class="d-flex justify-content-between my-auto">
              <span class="fs-5 font-weight-bold">折扣：</span>
              <span class="fs-5 text-danger">
                -NT${{ $filters.currency(final_total) }}
              </span>
            </div>
            <div v-else class="d-flex justify-content-between my-auto">
              <span class="fs-5 fw-bold">折扣：</span>
              <span class="fs-5 text-danger">0</span>
            </div>
            <div class="d-flex justify-content-between my-auto border-dashed-top">
              <p class="fs-5 mb-0 fw-bold">應付金額：</p>
              <!-- <p class="mb-0 h4 font-weight-bold
                text-secondary">NT${{ total - final_total }}</p> -->
              <p class="mb-0 fs-5 fw-bold text-secondary">NT${{ totalPriceWithDiscount }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h4 class="text-center">訂購人資訊</h4>
        <hr />
        <v-form ref="form" v-slot="{ errors }" @submit="''"
        class="bg-light p-3 rounded">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></v-field>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
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
              v-model="form.user.name"
            ></v-field>
            <error-message
              name="姓名"
              class="invalid-feedback"
            ></error-message>
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
              v-model="form.user.tel"
              :rules="isPhone"
            ></v-field>
            <error-message
              name="電話"
              class="invalid-feedback"
            ></error-message>
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
              v-model="form.user.address"
            ></v-field>
            <error-message
              name="地址"
              class="invalid-feedback"
            ></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              name="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <!-- <div class="text-end">
            <button type="submit" class="btn btn-danger" @click="onSubmit(form)">送出訂單</button>
          </div> -->
          <div class="d-flex flex-column-reverse flex-md-row mt-4
            justify-content-between align-items-md-center align-items-end w-100">
            <RouterLink to="/cart" class="text-dark mt-md-0 mt-3">
              <i class="bi bi-chevron-left"></i>
              返回上一步
            </RouterLink>
            <button type="submit" class="btn btn-primary py-3 px-5 rounded-0"
              @click="onSubmit(form)" :disabled="isFormIncomplete">
              送出訂單
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapActions, mapState } from 'pinia';
import FlowChart from '@/components/FlowChart.vue';
import cartStore from '../../stores/cartStore';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: { FlowChart },
  data() {
    return {
      form: {
        // 送出訂單資訊用表格資料
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
          date: '',
        },
        message: '',
      },
      createOrder: {},
      coupon_code: '',
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'getCart', 'onSubmit']),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '電話號碼需09開頭唷';
    },
    changeQty(cart, qty = 1) {
      // console.log(cart, qty);
      const cartData = {
        product_id: cart.product_id,
        qty,
      };
      // console.log(cartData); // 先把下面axios註解然後查看，當點擊+-有沒有抓到cartData
      axios
        .put(`${VITE_URL}/api/${VITE_PATH}/cart/${cart.id}`, { data: cartData })
        .then(() => {
          // console.log('已變更購物車數量', res);
          this.getCart();
        })
        .catch((err) => {
          alert('未變更購物車數量', err.response); // eslint-disable-line no-alert
        });
    },

    delCart(id) {
      // console.log(id);
      Swal.fire({
        title: '確定要刪除嗎？',
        text: '此動作將無法還原！',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: '確定刪除',
        cancelButtonText: '取消',
      }).then(() => {
        // console.log(result);
        axios.delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`).then(() => {
          // eslint-disable-next-line no-alert
          Swal.fire({
            icon: 'success',
            title: '已成功刪除',
            position: 'top',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: true,
            // timer: 1500,
          });
          // alert('已刪除單一購物車品項', res.data.message);
          this.getCart();
        });
      });
      // .catch((err) => {
      //   alert('未刪除單一購物車品項', err.response); // eslint-disable-line no-alert
      // });
    },
    addCouponCode() {
      // 客戶優惠卷
      const url = `${VITE_URL}/api/${VITE_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      // this.isLoading = true;
      axios
        .post(url, { data: coupon })
        .then(() => {
          this.getCart();
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: error.response.data.message,
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  computed: {
    ...mapState(cartStore, [
      'carts',
      'total',
      'final_total',
      'isLoading',
      'cart',
    ]),

    isFormIncomplete() {
      return (
        !this.form.user.email
        || !this.form.user.name
        || !this.form.user.tel
        || !this.form.user.address
      );
    },
    totalPriceWithDiscount() {
      // return coupon_code
      // ? total *(carts.coupon.percent / 100) : total
      const discount = this.coupon_code ? this.final_total : 0;
      return this.total - discount;
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
