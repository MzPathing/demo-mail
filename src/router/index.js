import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home= ()=> import ('../views/Home/Home.vue')
const Category= ()=> import ('../views/Category/Category.vue')
const ShopCart= ()=> import ('../views/ShopCart/ShopCart.vue')
const Profile= ()=> import ('../views/Profile/Profile.vue')
const Detail= ()=> import ('../views/Detail/Detail.vue')

const routes=[
	{
		path:"",
		redirect:"/home"
	},
	{
		path:"/home",
		component:Home
	},
	{
		path:"/category",
		component:Category
	},
	{
		path:"/shopcart",
		component:ShopCart
	},
	{
		path:"/profile",
		component:Profile
	},
	{
		path:"/detail",
		component:Detail
	},
]
const router=new VueRouter({
	routes,
	mode:"history"
})
export default router
