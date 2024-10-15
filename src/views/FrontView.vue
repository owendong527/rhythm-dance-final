<template>
  <div class="overflow-hidden">
    <NavbarComponent></NavbarComponent>
    <RouterView></RouterView>

    <footer class="pt-2 footer-bg footer-text">
      <ul class="list-unstyled d-lg-flex justify-content-lg-around">
        <li class="p-3 text-center">
          <RouterLink to="/"><img style="width: 75%;" class="logo object-fit"
            src="@/assets/images/logo/logo9.png" alt="logo">
          </RouterLink>
        </li>
        <li class="p-3">
          <p class="h3 text-white">聯絡我們</p>
          <p class=" p-2 text-white">
            <a class="nav-link" href="tel:(02) 1234-5678">
            (02) 1234-5678
            </a>
            <a class="nav-link" href="mailto:owendong900995@gmail.com">
              owendong900995@gmail.com
            </a>
            MON - SUN : 8:30 am - 17:30 pm
          </p>
          <ul class="list-unstyled d-flex">
            <li>
              <a class="pe-3 nav-link" href="#"><i class="h2 bi bi-facebook"></i></a>
            </li>
            <li>
              <a class="pe-3 nav-link" href="#"><i class="h2 bi bi-instagram"></i></a>
            </li>
            <li>
              <a class="pe-3 nav-link" href="#"><i class="h2 bi bi-envelope"></i></a>
            </li>
          </ul>
          <RouterLink class="nav-item nav-link my-4" to="/login">
              老師登入</RouterLink>
        </li>
      </ul>
      <div class="text-center mt-1">
        <p class="small text-secondary m-0">本網站僅供作品參考，並非商品真實營運販售，若有侵權請來信告知，將立即處理</p>
        <p class="small text-secondary m-0">
          Copyright ©Liaoyu All Rights Reserved. Designed by Owen</p>
      </div>
    </footer>

    <div>
      <a
        href="#"
        class="btn btn-dark toTop justify-content-center align-items-center"
        :class="{show:isShow}"
        @click.prevent="scrollToTop"
      >
        <span class="icon">
          <i class="bi bi-arrow-up-circle-fill"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import NavbarComponent from '../components/NavbarComponent.vue';

export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    NavbarComponent,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    winScroll() {
      const scroll = $(window).scrollTop();
      if (scroll >= 300) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.winScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.winScroll);
  },
};
</script>

<style scoped>
  .footer-bg {
    background-color: #523e27;
  }
  .overflow-hidden {
    overflow: hidden;
  }
</style>
