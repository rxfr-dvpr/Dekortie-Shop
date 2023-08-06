import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home'],
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/blog/:id',
      name: 'single blog',
      component: () => import('@/views/SingleBlogView.vue'),
      meta: {
        hasData: false
      },
      beforeEnter: (to, from, next) => {
        if (to.matched.some(record => record.meta.hasData)) {
          next()
        } else {
          next('/blog')
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/ShopView.vue')
    },
    {
      path: '/shop/:id',
      name: 'shop product',
      component: () => import('@/views/ShopProductView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/FaqView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/AccountView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.beforeEach(function (to, from, next) { 
  window.scrollTo(0, 0);
  next();
})

export default router
