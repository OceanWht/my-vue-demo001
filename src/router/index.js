import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/Category'
import ShoppingCart from '@/components/ShoppingCart'
import Me from '@/components/Me'
import BookDetail from '@/components/BookDetail'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      name: 'Main', path: '/', component: Main,
      children: [
        {path: 'home', name: 'Home', component: Home},
        {path: 'me', name: 'Me', component: Me},
        {path: 'category', name: 'Category', component: Category},
        {path: 'shoppingCart', name: 'ShoppingCart', component: ShoppingCart},
      ]
    },
    {path:'/bookdetail/:id',name:'BookDetail',component:BookDetail}

  ]
})
