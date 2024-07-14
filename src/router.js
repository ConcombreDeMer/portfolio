import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from './components/PageAccueil.vue'

const routes = [
  {
    path: '/',
    name: 'PageAccueil',
    component: PageAccueil
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router