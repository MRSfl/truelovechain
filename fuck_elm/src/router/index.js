import Vue from 'vue'
import Router from 'vue-router'
import Seller from 'components/seller/seller'
import Goods from 'components/goods/goods'

Vue.use(Router)

export default new Router({
  routes:[{
  	path:'/',
  	redirect:'/goods'	
  },{
  	path:'/goods',
  	component:Goods
  }]
})
