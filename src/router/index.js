import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetailView from '@/components/blog/BlogDetailView.vue'
const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about", webpackPrefetch : true */ '../views/AboutView.vue'
			)
	},
	{
		path: '/todo',
		name: 'todo',
		component: () =>
			import(/* webpackChunkName: "todo" */ '../views/TodoView.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () =>
			import(/* webpackChunkName: "blog" */ '../views/BlogView.vue')
	},
	{
		path: '/blog/:id',
		name: 'BlogDetailView',
		component: BlogDetailView
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default router
