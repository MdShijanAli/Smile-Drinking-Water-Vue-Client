import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import Products from '../views/Products.vue'
import Blog from '../views/Blog.vue'
import Career from '../views/Career.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/company-profile',
      name: 'CompanyProfile',
      component: CompanyProfile
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/career',
      name: 'Career',
      component: Career
    },
    
  ]
})

export default router
