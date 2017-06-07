import Vue from 'vue'
import Router from 'vue-router'
import Invoices from '@/pages/Invoices'
import Products from '@/pages/Products'
import Customers from '@/pages/Customers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Invoices',
      component: Invoices
    }, {
      path: '/products',
      name: 'Products',
      component: Products
    }, {
      path: '/customers',
      name: 'Customers',
      component: Customers
    }
  ]
})
