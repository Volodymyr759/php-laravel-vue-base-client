import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'
import LoginView from '../views/public/LoginView.vue'

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
    component: () => import('../views/Properties.vue')
  },
  {
    path: '/tenants',
    name: 'tenants',
    meta: {
      layout: 'main-layout',
      title: 'Tenants'
    },
    component: () => import('../views/Tenants.vue')
  },
  {
    path: '/leases',
    name: 'leases',
    meta: {
      layout: 'main-layout',
      title: 'Leases'
    },
    component: () => import('../views/Leases.vue')
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
    component: () => import('@/views/Notifications.vue')
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
    component: LoginView
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

export default router
