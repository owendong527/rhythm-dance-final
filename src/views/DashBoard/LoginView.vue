<template>
  <div class="container-fluid">
    <VueLoading :active="isLoading" :z-index="1060" />
    <div class="row justify-content-center">
      <div class="col-lg-4 mt-5">
        <h1 class="h3 mb-3 font-weight-normal col-7">請先登入</h1>
        <form id="form" class="form-signin" @submit.prevent="signIn">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="Password"
              placeholder="Password"
              required
              autocomplete="on"
            />
            <label for="Password">Password</label>
          </div>
          <div class="d-flex">
            <button
              class="btn btn-lg btn-dark w-100 mt-3"
              type="button"
              @click="goPrePage"
            >
              返回首頁
            </button>
            <button
              class="btn btn-lg btn-primary w-100 mt-3 ms-3"
              type="submit" @click.prevent="signIn"
            >
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      // e.preventDefault();
      if (this.user.username && this.user.password) {
        const api = `${VITE_URL}/admin/signin`;
        this.isLoading = true;
        axios
          .post(api, this.user)
          .then((res) => {
            console.log(res);
            const { token, expired } = res.data;
            console.log(token);
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
            this.isLoading = false;
            Swal.fire('登入成功');
            this.$router.push('/admin/products');
          })
          .catch(() => {
            this.isLoading = false;
            Swal.fire('請檢查帳號密碼是否有誤');
          });
      } else {
        Swal.fire('請填寫正確資料');
      }
    },
    goPrePage() {
      this.$router.push('/');
    },
  },

  // mounted() {
  //   setTimeout(() => {
  //     this.isLoading= false
  //   }, 1000);
  // }
};
</script>
