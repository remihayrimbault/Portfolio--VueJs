import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/legal_notice',
    name: 'Legal Notice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LegalNotice.vue')
  },
  {
    path: '/api-weather',
    name: 'Api Weather',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ApiWeather.vue')
  },
  {
    path: '/showcase-carpenter',
    name: 'Showcase Carpenter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowcaseCarpenter.vue')
  },
  {
    path: '/api-cocktail',
    name: 'Api Cocktail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ApiCocktail.vue')
  },
  {
    path: '/showcase-agency',
    name: 'Showcase Agency',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowcaseAgency.vue')
  },
  {
    path: '/this-website',
    name: 'This Website',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ThisWebsite.vue')
  },
  {
    path: '/showcase-electrician',
    name: 'Showcase Electrician',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowcaseElectrician.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
