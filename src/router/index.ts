import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/partner',
    name: 'partner',
    component: () => import('../views/SponsorView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (to.hash) {
        nextTick(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            resolve({
              el: element,
              behavior: 'smooth'
            });
          } else {
            resolve({ top: 0 });
          }
        });
      } else {
        resolve({ top: 0 });
      }
    });
  },
});

export default router;

