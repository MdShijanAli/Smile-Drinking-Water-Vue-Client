import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import DefaultLayout from '@/layout/DefaultLayout.vue';
import { getCookie } from '@/utils/cookies'; 


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
    
        {
            path: '/',
            component: DefaultLayout,
            children: [
              {
                path: '',
                name: 'home',
                component: () => import('../views/HomeView.vue')
            },
              {
                path: '/company-profile',
                name: 'CompanyProfile',
                component: () => import('../views/CompanyProfile.vue')
              },
              {
                path: '/products',
                name: 'Products',
                component: () => import('../views/Products.vue')
              },
              {
                path: '/blogs',
                name: 'Blog',
                component: () => import('../views/Blog.vue')
              },
              {
                path: '/career',
                name: 'Career',
                component: () => import('../views/Career.vue')
              },
              {
                path: '/terms-condition',
                name: 'TermsAndCondition',
                component: () => import('../views/TermsAndCondition.vue')
              },
              {
                path: '/privacy-policy',
                name: 'PrivacyPolicy',
                component:() => import('../views/PrivacyPolicy.vue')
              },
              {
                path: '/return-refund',
                name: 'ReturnRefund',
                component: () => import('../views/ReturnRefund.vue')
              },
              {
                path: '/blog/:title',
                name: 'blog-details',
                component: () => import('../components/BlogDetails.vue'),
                props: true
              },
              {
                path: '/product/:id',
                name: 'product-details',
                component: () => import('../components/ProductDetails.vue'),
                props: true
              },
              {
                path: '/login',
                name: 'Login',
                component: () => import('../components/Login/Login.vue')
            },
              {
                path: '/forgot-password',
                name: 'ForgotPassword',
                component: () => import('../components/Login/ForgotPassword.vue')
            },
            ]
          },
        {
            path: '/dashboard',
            component: AppLayout,
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('../views/Dashboard.vue')
                },
                {
                    path: '/all-products',
                    name: 'products',
                    component: () => import('../components/DashboardSections/DashboardProducts.vue')
                },
                {
                    path: '/orders',
                    name: 'orders',
                    component: () => import('@/components/DashboardSections/DashboardOrders.vue')
                },
                {
                    path: '/applications',
                    name: 'applications',
                    component: () => import('../components/DashboardSections/DashboardApplications.vue')
                },
                {
                    path: '/jobs',
                    name: 'jobs',
                    component: () => import('../components/DashboardSections/DashboardJobs.vue')
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('../components/DashboardSections/Settings.vue')
                },
            

            ]
        },


        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});


import axios from 'axios'; 

// Add a navigation guard
router.beforeEach((to, from, next) => {
  axios.get('https://server.zealtechweb.com/api/auth')
    .then(res => {
      const auth = res.data[0];

      const isLoggedIn = getCookie('userEmail') === auth.email || getCookie('userEmail') === auth.phone;
      console.log('isLoggedIn:', isLoggedIn);

      if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
        console.log('Redirecting to login');
        next('/login');
      } else {
        console.log('Continuing to the requested route');
        next();
      }
    })
    .catch(err => {
      console.log(err.message);
      // Handle error, for example, redirect to login
      next('/login');
    });
});



export default router;
