import {
    RouteRecordRaw, 
    createRouter,
    createWebHistory
} from "vue-router";


export const routes: Array<RouteRecordRaw> = [
    {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/page1/index.vue')
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/page2/index.vue')
    },
    {
        path: "/page3",
        name: "page3",
        component: () => import("../views/page3/index.vue"),
        redirect: (to) => {
            return {
                path: "/page3/child1",
                query: {
                    userName: 1
                }
            }
        },
        children: [{
            path: "child1",
            name: "child1",
            component: () => import("../views/page3/children/child1.vue"),
        },{
            path: "child2",
            name: "child2",
            component: () => import("../views/page3/children/child2.vue"),
        }],
    },
    {
        path: "/page4",
        name: "page4",
        component: () => import("../views/page4/index.vue"),
        redirect: "/page4/Name1AndName2",
        children: [{
            path: "Name1AndName2",
            name: "name1",
            components: {
                default: () => import("../views/page4/names/name1.vue"),
                name2: () => import("../views/page4/names/name2.vue"),
            },
        }, {
            path: "Name1AndName3",
            name: "name2",
            components: {
                default: () => import("../views/page4/names/name1.vue"),
                name3: () => import("../views/page4/names/name3.vue"),
            },
        }],
    }
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router