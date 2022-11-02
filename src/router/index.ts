import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/Dashboard/Dashboard.vue'
import Login from '../views/public/Login.vue'
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    meta: {
      layout: 'main-layout',
      title: 'Dashboard'
    },
    component: DashboardView
  },
  {
    path: '/applications',
    name: 'applications',
    meta: {
      layout: 'main-layout',
      title: 'Applications'
    },
    component: () => import('../views/Applications.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'main-layout',
      title: 'Profile'
    },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/properties',
    name: 'properties',
    meta: {
      layout: 'main-layout',
      title: 'Properties'
    },
    component: () => import('../views/Property/Properties.vue')
  },
  {
    path: '/tenants',
    name: 'tenants',
    meta: {
      layout: 'main-layout',
      title: 'Tenants'
    },
    component: () => import('@/views/Tenant/Tenants.vue')
  },
  {
    path: '/leases',
    name: 'leases',
    meta: {
      layout: 'main-layout',
      title: 'Leases'
    },
    component: () => import('../views/Lease/Leases.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    meta: {
      layout: 'main-layout',
      title: 'Reports'
    },
    component: () => import('../views/Reports.vue')
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    meta: {
      layout: 'main-layout',
      title: 'Maintenance'
    },
    component: () => import('../views/Maintenance.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      layout: 'main-layout',
      title: 'UI Tests'
    },
    component: () => import('../views/Test.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    meta: {
      layout: 'main-layout',
      title: 'Notifications'
    },
    component: () => import('@/views/Notification/Notifications.vue')
  },
  {
    path: '/admins',
    name: 'admins',
    meta: {
      layout: 'main-layout',
      title: 'Admins'
    },
    component: () => import('../views/Admins.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'public-layout'
    },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'public-layout'
    },
    component: () => import('@/views/public/Register.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    meta: {
      layout: 'public-layout'
    },
    component: () => import('@/views/public/ForgotPassword.vue')
  },
  {
    path: '/change-password',
    name: 'change-password',
    meta: {
      layout: 'public-layout'
    },
    component: () => import('@/views/public/ChangePassword.vue')
  },
  {
    path: '/link-confirmed',
    name: 'link-confirmed',
    meta: {
      layout: 'public-layout'
    },
    component: () => import('@/views/public/LinkConfirmed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/forgot-password'];
  const authRequired = !publicPages.includes(to.path);

  const userFromStore = store.state.auth;
  if (authRequired && !userFromStore) {
    return '/login';
  }
});

export default router
