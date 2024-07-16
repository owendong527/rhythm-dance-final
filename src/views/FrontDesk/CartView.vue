<template>
  <div class="container">
    <div class="main-lg mt-3">
      <h3 class="mt-3 mb-4">確認商品</h3>
      <div class="row justify-content-center">
        <!-- 購物車列表 -->
        <div class="col-md-10" v-if="!this.carts.length">
          <p>您尚未選擇任何選課</p>
          <RouterLink
              class="btn btn-outline-primary btn-lg py-3 px-7"
              to="/products"
              >前往選課</RouterLink
            >
        </div>
        <div v-else class="col-md-10">
          <table class="table align-middle text-center">
            <thead>
              <tr>
                <th width="150">商品圖</th>
                <th width="200">品名</th>
                <th>數量</th>
                <th width="150">金額</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cItem in this.carts" :key="cItem.id">
                <td>
                  <div
                    style="
                      height: 150px;
                      background-size: cover;
                      background-position: center;
                    "
                    :style="{
                      backgroundImage: `url(${cItem.product.imageUrl})`,
                    }"
                  ></div>
                </td>
                <td>{{ cItem.product.title }}</td>
                <td>
                  <div class="d-flex flex-nowrap justify-content-center">
                    <button
                      v-if="cItem.qty > 1"
                      class="btn btn-outline-primary shadow-none"
                      type="button"
                      @click="
                        cItem.qty--;
                        changeQty(cItem, cItem.qty);
                      "
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <button
                      v-else
                      class="btn btn-outline-danger shadow-none"
                      type="button"
                      @click="delCart(cItem.id)"
                    >
                      <i class="bi bi-trash-fill"></i>
                    </button>
                    <input
                      type="number"
                      class="form-control bg-transparent shadow-none text-center"
                      readonly
                      :value="cItem.qty"
                    />
                    <button
                      class="btn btn-outline-primary shadow-none"
                      type="button"
                      @click="
                        cItem.qty++;
                        changeQty(cItem, cItem.qty);
                      "
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </td>
                <td class="">${{ cItem.total }}</td>
                <td>
                  <button
                    class="btn btn-outline-danger shadow-none"
                    type="button"
                    @click="delCart(cItem.id)"
                  >
                    <i class="bi bi-trash3 text-danger"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="text-end fw-bold">
                <td colspan="3" class="fs-4">總價:</td>
                <td class="text-center">{{ this.total }}元</td>
              </tr>
              <!-- <tr v-if="carts.final_total !==
                carts.total"
                class="text-success text-end
                fw-bold">
                  <td colspan="3">優惠價</td>
                  <td colspan="4">
                    {{carts.final_total}}元</td>
                  </tr> -->
            </tfoot>
          </table>
          <div class="d-flex justify-content-between my-7">
            <RouterLink
              class="btn btn-outline-primary btn-lg py-3 px-7"
              to="/products"
              >繼續選課</RouterLink
            >
            <RouterLink
              class="btn bg-primary bg-gradient btn-lg py-3 px-7"
              to="/booking"
              >前往結帳</RouterLink
            >
          </div>
          <!-- <button class="btn
            btn-outline-danger
            d-block ms-auto"
            type="button"
            @click="delCarts">
            <span
            v-if="carts === status.delCartLoading"
            class="spinner-border
            spinner-border-sm"
            aria-hidden="true"></span>
            刪除全品項</button> -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>

// const mySwiper = new Swiper('.swiper-container', {
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   slidesPerView: 2,
//   spaceBetween: 10,
//   breakpoints: {
//     767: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cartStore';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  methods: {
    // ...mapActions(cartStore, ['addToCart', 'getCart', 'changeQty', 'delCart']),
    ...mapActions(cartStore, ['addToCart', 'getCart']),
    // 以下加入的是產品內容
    // addToCart(product, qty = 1) {
    //   // console.log(product, qty);
    //   const cartData = {
    //     product_id: product.id,
    //     qty,
    //   };
    //   this.status.addToCartLoading = product.id;
    //   // console.log(cartData);
    //   axios
    //     .post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: cartData })
    //     .then(() => {
    //       // alert('已加入購物車', res);
    //       this.status.addToCartLoading = '';
    //       this.$refs.pModal.close();
    //       this.getCarts();
    //     })
    //     .catch((err) => {
    //       alert('未加入購物車', err.response); // eslint-disable-line no-alert
    //     });
    // },
    // getCarts() {
    //   axios
    //     .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
    //     .then((res) => {
    //       // console.log('取得購物車資料', res);
    //       this.carts = res.data.data;
    //     })
    //     .catch((err) => {
    //       alert('未取得購物車資料', err.response); // eslint-disable-line no-alert
    //     });
    // },
    // 以下變更的是購物車內容
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

    // delCarts() {
    //   this.status.delCartLoading = this.carts;
    //   axios
    //     .delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
    //     .then((res) => {
    //       this.status.delCartLoading = '';
    //       // eslint-disable-next-line no-alert
    //       alert(res.data.message);
    //       this.getCarts();
    //     })
    //     .catch((err) => {
    //       this.status.delCartLoading = '';
    //       // eslint-disable-next-line no-alert
    //       alert(err.response);
    //       // alert('未刪除購物車品項', err.response); // eslint-disable-line no-alert
    //     });
    // },
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total']),
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style scoped>
.main-lg {
  min-height: 500px;
}
</style>
