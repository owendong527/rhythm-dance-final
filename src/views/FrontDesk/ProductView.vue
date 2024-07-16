<template>
  <div class="container mt-6">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a class="link-secondary fs-5 text-decoration-none" href="#/products">課程</a>
        </li>
        <li class="breadcrumb-item text-aria fw-bold fs-5" aria-current="page">課程資訊
        </li>
      </ol>
    </nav>

    <div class="row align-items-center">
      <div class="col-md-6">
        <img
            class="img-fluid object-fit-cover w-100 mb-2"
            :src="product.imageUrl"
            :alt="product.title"
            style="max-height: 400px"
            data-aos="zoom-in"
          />
      </div>
      <div class="col-md-6 d-flex flex-column">
        <h4 class="fs-1 fw-bold mb-3">{{ product.title }}</h4>
        <div>
          <span class="badge bg-success rounded-pill fs-6 mb-3">{{
            product.category
          }}</span>
        </div>
        <p class="fs-5 my-3">{{ product.content }}</p>
        <p class="fs-7 my-2">建議：{{ product.description }}</p>
        <div class="h4 my-1">售價：NT$ {{ product.price }} 元</div>
        <del class="fs-6 mb-4">原價：NT$ {{ product.origin_price }} 元</del>
        <div class="mt-3 mb-5">
          <div class="input-group">
            <button
              type="button"
              class="btn btn-success"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';
// import cartStore from '@/stores/cartStore'; 下面這樣也可以 @= SRC/

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      tempProduct: {},
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`).then((res) => {
        // console.log(res);
        this.product = res.data.product;
      });
    },
    ...mapActions(cartStore, ['addToCart']),
  },
  mounted() {
    // console.log(this.$route);
    this.getProduct();
  },
};
</script>
