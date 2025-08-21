import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from "@/pages/WelcomePage.vue";
import FaqPage from "@/pages/FaqPage.vue";
import IndexPage from "@/pages/IndexPage.vue";
import UninstallPage from "@/pages/UninstallPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomePage,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FaqPage,
    },
    {
      path: '/uninstall',
      name: 'uninstall',
      component: UninstallPage,
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
})

export default router
