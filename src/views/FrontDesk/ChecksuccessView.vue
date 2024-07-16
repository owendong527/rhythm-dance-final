<!-- <template>
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <h2>付款成功 感謝購買</h2>
              <p>我們人員將在24小時內與您聯絡</p>
              <a href="./index.html" class="btn btn-dark mt-4 px-5">Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-md-50 w-100 position-absolute opacity-1" style="z-index: -1; min-height: 100vh; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
      background-position: center center;">
      </div>
    </div>
</template> -->

<template>
  <main class="container-fluid cart-bg pt-lg-6 pb-5 py-xl-6 px-3 px-xl-10">
    <FlowChart :outProgress="100"/>
    <!-- <div class="text-center mt-5">
      <img class="img-fluid" src="@/assets/images/cart-step/step3.png" alt="step-img">
    </div> -->
    <div class="row text-center" data-aos="fade-up">
      <div class="py-5 col-md-12">
        <h2>已成功送出訂單</h2>
        <p>非常感謝您的訂購，有任何問題歡迎來信詢問。</p>
        <RouterLink to="/" class="btn btn-outline-dark me-2 rounded-0" exact>回到首頁</RouterLink>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import FlowChart from '@/components/FlowChart.vue';

export default {
  components: { FlowChart },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(cartStore, ['carts']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
  },
  mounted() {
    this.getCart();
  },
};
</script>

  <style scoped>
  </style>
