<!-- eslint-disable import/no-extraneous-dependencies -->
<template>
  <div class="container mt-md-6 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div class="accordion border border-bottom
          border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
          <div class="border-0">
            <div class="card-header px-4 py-4
              border-bottom-0 border-top-0 border-start-0
              border-end-0 rounded-0"
              id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  課程資訊
                </h4>
                <i class="bi bi-arrow-down-circle fs-3"></i>
              </div>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
              <div class=" py-0">
                <ul class="side-menu">
                  <li class="list-group-item h5 mb-0 fw-bold">
                    <RouterLink class="py-2 side-category
                    list-group-item-action mb-0"
                    to="/products">全部</RouterLink>
                  </li>
                  <li v-for="item in categories" :key="item"
                  class="list-group-item h5 mb-0 text-dark fw-bold">
                    <RouterLink class="py-2 side-category
                    list-group-item-action mb-0"
                    :to="`/products?category=${item}`">{{ item }}</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 產品集 -->
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6 mt-4" v-for="product in products" :key="product.id">
            <div class="card border-0 mb-4 position-relative">
              <img :src="product.imageUrl"
              class="card-img-top object-fit-cover" @click.prevent="goToDetail(product)"
              style="height: 250px;" alt="課程圖片">
            </div>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3 ">
                <RouterLink :to="`/product/${product.id}`"
                class="card-title">{{ product.title }}</RouterLink>
              </h4>
              <p class="card-text mb-0">NT${{ product.price }}
              </p>
              <button type="button" class="btn btn-outline-secondary
              w-100" @click.stop="addToCart(product.id)">
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import { mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      product: {},
      categories: ['芭蕾', '中國舞', '瑜珈', '有氧', '街舞'],
    };
  },
  // 當選擇分類的項目時要重新整理後才會跳到該項目，所以要用watch監聽query值，用深層監聽
  watch: {
    '$route.query': {
      handler() { // 監聽路由下的 query屬性，當路由有變化的時候會再重新取一次值
        this.getProducts();
      },
      deep: true,
    },
  },
  methods: {
    getProducts() {
      // console.log(this.$route);
      const { category = '' } = this.$route.query; // 如果category 沒有加空字串的話，它的預設會是 undefined
      axios.get(`${VITE_URL}/api/${VITE_PATH}/products?category=${category}`)
        .then((res) => {
          // console.log(res);
          this.products = res.data.products;
        });
    },
    getProduct() {
      const { id } = this.$route.params;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`).then((res) => {
        // console.log(res);
        this.product = res.data.product;
      });
    },
    goToDetail(product) {
      this.$router.push(`/product/${product.id}`);
    },
    ...mapActions(cartStore, ['addToCart']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0;
  }
  li {
    margin: 5px 0px;
    width: 100%;  /* 解決背景顏色延伸到整個欄位 */
  }
  .side-category, .card-title {
    display: block;
    text-decoration: none;
  }
  .side-category:hover {
    background-color: #664d03;
    color: white;
    transition: 0.5s;
  }

  .card:hover img {
    transform: scale(1.1);
  }
  .card:hover {
    cursor: pointer;
  }
</style>
