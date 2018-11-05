import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User   from '@/pages/User'
import Category from '@/pages/Category'
import Article from '@/pages/Article'
import Customer from '@/pages/Customer'


Vue.use(Router)

export default new Router({
  routes: [{
    path:'/customer/:id',
    component:Customer
    }, {
      path: '/',
      component: HelloWorld
    },{
      path:'/article',
      component:Article
    },{
      path:'/category',
      component:Category
    },{
      path:'/User',
      component:User
    }
  ]
})
