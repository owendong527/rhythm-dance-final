<!-- eslint-disable no-console -->
<template>
  <BackNavbarLayout />
  <div class="container-fluid">
    <RouterView v-if="status"/>
    <!-- <RouterView/> -->
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import BackNavbarLayout from '@/components/BackNavbarLayout.vue';

const { VITE_URL } = import.meta.env;

export default {
  components: {
    BackNavbarLayout,
  },
  data() {
    return {
      status: false,
    };
  },
  methods: {
    checkAdmin() {
      // if (token) {
      //   if (!this.status) {
      // const decodedCookie = decodeURIComponent(document.cookie);
      // const ca = decodedCookie.split(';');
      axios
        // .post(`${VITE_URL}/api/user/check`, {
        //   headers: {
        //     authorization: ca.hexToken,
        //     test: ca.hexToken,
        //   },
        // })
        .post(`${VITE_URL}/api/user/check`)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: '驗證成功',
          });
          // console.log(res.data);
          this.status = true;
        })
        .catch(() => {
          // console.dir(err);
          Swal.fire('身分驗證錯誤，跳轉至登入頁');
          this.$router.push('/login');
        });
      //   } else {
      //     this.$router.push('/admin');
      //   }
      // } else {
      //   this.$router.push('/login');
      // }
    },
  },
  created() {
    // 取出token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // console.log(token);
    //  當axios 發出api請求時 自動全部將header加入上去
    axios.defaults.headers.common.Authorization = `${token}`;
    this.checkAdmin();
  },
};
</script>
