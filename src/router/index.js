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
        path: 'home',
        name: 'Home',
        component: () => import('../views/frontView/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/frontView/AboutView.vue'),
      },
      {
        path: 'carts',
        component: () => import('../views/frontView/CartsView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/frontView/ProductsView.vue'),
      },
      {
        path: 'products/:id',
        component: () => import('../views/frontView/ProductDetailView.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'news',
        component: () => import('../views/frontView/NewsView.vue'),
      },
      {
        path: 'news/:id',
        component: () => import('../views/frontView/NewsDetailView.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/NotFoundView.vue'),
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
  // https://router.vuejs.org/zh/guide/advanced/scroll-behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
