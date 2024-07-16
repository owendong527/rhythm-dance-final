<template>
  <VueLoading :active="isLoading" :z-index="1060"></VueLoading>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <div class="navbar-brand">後台</div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">產品</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/orders" class="nav-link">訂單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/coupons" class="nav-link">優惠卷</RouterLink>
          </li>
          <li>
            <RouterLink to="/admin/articles" class="nav-link">貼文</RouterLink>
          </li>
          <li class="nav-item">
            <a @click.prevent="signOut" class="nav-link" style="cursor: pointer"
              >登出</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import axios from 'axios';

import Swal from 'sweetalert2';

// const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    // logout() {
    //   this.isLoading = true;
    //   const api = `${VITE_URL}/logout`;
    //   axios
    //     .post(api)
    //     .then((res) => {
    //       this.isLoading = false;
    //       console.log(res);
    //       this.$router.push('/');
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    signOut() {
      Swal.fire('已登出');
      document.cookie = 'hexToken=;expires=;';
      this.$router.push('/login');
    },
  },
};
</script>
