import {
    createRouter,
    createWebHistory
} from "vue-router";


let routes = [
    {
        path: '/',
        name: 'TodoList',
        component: () => import('../views/TodoList/index.vue')
    },
    //{
    //配置404页面
    //path: '/:catchAll(.*)',
    //name: '404',
    //component: () => import(''),
    //}
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router