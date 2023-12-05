import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import Products from '../views/Products.vue'
import Blog from '../views/Blog.vue'
import Career from '../views/Career.vue'
import BlogDetails from '../components/BlogDetails.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Dashboard from '../views/Dashboard.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import DashboardLayout from '../components/DashboardLayout.vue'
import DashboardProducts from '../components/DashboardProducts.vue'
import Settings from '../components/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
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
          path: '/blogs',
          name: 'Blog',
          component: Blog
        },
        {
          path: '/career',
          name: 'Career',
          component: Career
        },
        {
          path: '/blog/:title',
          name: 'blog-details',
          component: BlogDetails,
          props: true
        },
        {
          path: '/product/:title',
          name: 'product-details',
          component: ProductDetails,
          props: true
        },
      ]
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          component: Dashboard
        },
        {
          path: '/all-products',
          component: DashboardProducts
        },
        {
          path: '/settings',
          component: Settings
        },
      ],
    },
    
    
    
  ]
})

export default router
