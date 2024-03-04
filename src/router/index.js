import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/',
    component: () => import('../views/frontView/LayoutView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontView/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/frontView/AboutView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/adminView/AdminLayoutView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/adminView/AdminProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/adminView/AdminOrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/adminView/AdminCouponsView.vue'),
      },
      {
        path: 'articles',
        component: () => import('../views/adminView/AdminArticlesView.vue'),
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
