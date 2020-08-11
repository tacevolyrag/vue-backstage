import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/frontdesk/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/frontdesk/Index.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/frontdesk/About.vue'),
      },
      {
        path: 'paybill',
        component: () => import('../views/frontdesk/Paybill.vue'),
      },
      {
        path: 'payedbill',
        component: () => import('../views/frontdesk/Payedbill.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/frontdesk/Product.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/frontdesk/Products.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/frontdesk/Cart.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'boardproducts',
        component: () => import('../views/dashboard/Boardproducts.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'depositimage',
        component: () => import('../views/dashboard/Depositimage.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/dashboard/Login.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/Order.vue'),
      },
    ],
  },
];
const router = new VueRouter({
  routes,
});

export default router;
