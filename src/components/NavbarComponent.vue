<template>
  <div class="front-nav">
    <nav id="front-nav" class="navbar navbar-expand-lg navbar-bg
    fixed-top align-items-center" :class="{ shadows: false }">
        <!-- logo -->
        <!-- <img class="logo-img"
        src="@/assets/images/logo/logo4.png" alt="logo" /> -->
      <RouterLink class="navbar-brand" to="/">
      <img src="@/assets/images/logo/logo9.png" height="80" alt="logo"/>
      </RouterLink>

      <!-- 第二部分：電腦版-購物車、我的最愛-->
      <div class="d-flex order-lg-2 justify-content-around icon-link-wrap">
        <!-- <router-link class="nav-link nav_jq icon-link" to="#">
          <span><i class="bi bi-heart-fill"></i></span>
        </router-link> -->

        <div class="dropdown">
          <button
            id="dropdownMenuButton"
            class="dropdown-toggle nav-link nav_jq cart-dropdown-btn icon-link"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="position-relative"
              ><i class="bi bi-cart-fill fs-5"></i>
              <!-- class="cart-num position-absolute top-0
                start-100 translate-middle badge rounded-pill bg-danger" -->
              <span
                v-if="carts.length > 0"
                class="cart-num"
                >{{ this.carts?.length }}
              </span>
            </span>
          </button>

          <div
            class="cart-popup dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
          >
            <div class="table-responsive dropdown-cart-list">
              <table class="table table-sm table-striped">
                <caption>
                  已選擇行程
                </caption>
                <thead>
                  <tr>
                    <th scope="col">品名</th>
                    <th scope="col">數量</th>
                    <th scope="col">單價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cItem in this.carts" :key="cItem.id">
                    <td>
                      <span class="ellipsis">{{ cItem.product.title }}
                      </span>
                    </td>
                    <td>{{ cItem.qty }}</td>
                    <td>${{ cItem.product.price }}</td>
                  </tr>
                  <tr v-if="this.carts.length === 0">
                    <td colspan="3" class="text-center">
                      您尚未選擇任何行程喔！
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right">
                      總計：{{ this.total }}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <button
                v-if="this.carts.length > 0"
                type="button"
                class="btn btn-block btn-primary"
                :disabled="this.carts.length === 0"
                @click.prevent="toPageCart"
              >
                查看購物車
                <span><i class="bi bi-arrow-right-short"></i></span>
              </button>
              <router-link
                v-else
                class="btn btn-block btn-primary"
                to="/products"
              >
                前去逛逛
                <span><i class="bi bi-arrow-right-short"></i></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    <!-- 第一部分：手機版 -->
      <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
      </button>

      <!-- 第二部分：電腦版-展開的導覽列-->
      <div id="navbarNavDropdown" class="collapse navbar-collapse order-lg-1">
        <ul class="navbar-nav ml-auto">
          <!-- 把 a 連結換成 RouterLink -->
          <li class="nav-item">
              <RouterLink class="nav-link nav_jq" to="/">
                首頁
              </RouterLink>
            </li>
          <li class="nav-item">
            <RouterLink class="nav-link nav_jq" to="/about">
              關於我們
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link nav_jq" to="/articles">
              最新消息
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link nav_jq" to="/products">
              課程
            </RouterLink>
          </li>
        </ul>

          <!-- 在按鈕 加上 position-relative 可以讓按鈕出現數字-->
          <!-- <RouterLink
                class="nav-item nav-link btn btn-outline-primary position-relative"
                to="/cart">
                <i class="bi bi-cart"></i>
                <span
                  class="position-absolute top-0
                  start-100 translate-middle badge rounded-pill bg-danger">
                {{ this.cart?.carts?.length }} 這是當把狀態設在navbar裡 下面是把狀態用pinia的方式設定
                  {{ this.carts?.length }}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </RouterLink> -->
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapActions, mapState } from 'pinia';
import cartStore from '../stores/cartStore';

export default {
  // 因為在 cartStore 裡有把資料在getCart 的方法裡重新存值進去，所以這裡就不用寫了改用 mapState 從store引資料過來
  // data() {
  //   return {
  //     cart: {},
  //   };
  // },
  methods: {
    // 在 navbar這把存在 store 的購物車方法給引入過來
    ...mapActions(cartStore, ['getCart']),
    // getCart() {
    //   axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
    //     .then((res) => {
    //       // console.log('cart', res);
    //       this.cart = res.data.data;
    //       console.log('cart', this.cart);
    //     });
    // },
    toPageCart() {
      if (this.$route.path === '/booking') return;
      this.$router.push('/booking');
    },
    winScroll() {
      const scroll = $(window).scrollTop();
      if (scroll >= 10) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total']),
  },
  mounted() {
    this.getCart();
    window.addEventListener('scroll', this.winScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.winScroll);
  },
};
</script>
<style scoped>
.navbar-bg {
  height: 70px;
  padding-left: 40px;
  background-color: #523e27;
}
@media (max-width: 991px) {
  .navbar {
    height: auto; /* 或者你可以直接使用 `height: unset;` */
  }
}
/* .navbar-brand {
  width: 300px;
} */
/* .fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
} */
/* .logo-img {
  padding-top: 40px;
} */
.dropdown-menu {
  top: 120%;
  left: -500%;
  width: 350px;
}
@media (max-width: 991px) {
  .dropdown-menu {
    width: auto;
    left: -650%;
  }
}

.btn-block {
    display: block;
    width: 100%;
}
.ml-auto{
  margin-left: auto;
}
</style>
