/* eslint-disable import/no-unresolved */
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/FrontDesk/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/FrontDesk/AboutView.vue'),
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/FrontDesk/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        name: '產品詳細頁面',
        component: () => import('../views/FrontDesk/ProductView.vue'),
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/FrontDesk/CartView.vue'),
      },
      {
        path: 'booking',
        name: '訂購人資訊',
        component: () => import('../views/FrontDesk/BookingView.vue'),
      },
      {
        path: '/checkout/:id',
        name: '訂購確認',
        component: () => import('../views/FrontDesk/CheckoutView.vue'),
      },
      {
        path: 'checksuccess',
        name: '訂購完成訊息',
        component: () => import('../views/FrontDesk/ChecksuccessView.vue'),
      },
      {
        path: 'articles',
        name: '文章列表',
        component: () => import('@/views/FrontDesk/ArticlesView.vue'),
      },
      {
        path: 'article/:id',
        name: '文章詳細頁面',
        component: () => import('@/views/FrontDesk/ArticleView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: '登入',
    component: () => import('../views/DashBoard/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/DashBoard/BackView.vue'),
    children: [
      {
        path: 'orders',
        component: () => import('../views/DashBoard/OrdersView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/DashBoard/AdminProductsView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/DashBoard/CouponsView.vue'),
      },
      {
        path: 'articles',
        name: '文章頁面',
        component: () => import('@/views/DashBoard/ArticlesView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
