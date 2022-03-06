import Vue from 'vue'
import Router from 'vue-router'
import Transactions from '@/components/Transactions'
import Transaction from '@/components/Transaction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Transactions',
      component: Transactions
    },
    {
      path: '/:id',
      name: 'Transaction',
      component: Transaction
    }
  ]
})