import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/home/Home";
import Cart from "../components/cart/Cart";
import Category from "../components/category/Category";
import Profile from "../components/profile/Profile";
Vue.use(VueRouter)


const routes = [
  {
    path:'/home',
    components:Home
  },
  {
    path:'/cart',
    components: Cart
  },{
    path:'/category',
    components: Category
  },{
    path:'/profile',
    components: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
