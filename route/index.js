import VueRouter from 'vue-router'
import Vue from 'vue'
import Canvas from '../views/canvas.vue'
import Privew from '../views/privew.vue'
import List from '../views/list.vue'

// 通过vue.use(插件)，安装插件
Vue.use(VueRouter)
// 创建路由对象
const routes = [{
	path: "",
	// 重定项
	redirect: 'list'
}, {
	path: '/canvas',
	component: Canvas
},{
	path: '/privew',
	component: Privew
},{
	path: '/list',
	component: List
},{
	path: '/dataView',
	component: DataView
}]
const app = getApp()
const router = new VueRouter({
	// 配置URL和组价直接的映射关系
	routes,
	// history模式 
	mode: 'hash'
})
// 将router对象传入到vue实例中
export default router
