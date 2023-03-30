import {
    RouteRecordRaw,
    createRouter,
    createWebHistory
} from "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        title?: string;
        icon?: string
    }
}

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'permission',
        meta: {
            title: "permission"
        },
        component: () => import('../views/permission/index.vue')
    },
    {
        path: '/form',
        name: 'form',
        meta: {
            title: "form"
        },
        component: () => import('../views/form/index.vue')
    },
    {
        path: "/page3",
        name: "page3",
        meta: {
            title: "page3"
        },
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
            meta: {
                title: "page3-child1"
            },
            name: "child1",
            component: () => import("../views/page3/children/child1.vue"),
        }, {
            path: "child2",
            name: "child2",
            meta: {
                title: "page3-child2"
            },
            component: () => import("../views/page3/children/child2.vue"),
        }],
    },
    {
        path: "/page4",
        name: "page4",
        component: () => import("../views/page4/index.vue"),
        meta: {
            title: "page4"
        },
        redirect: "/page4/Name1AndName2",
        children: [{
            path: "Name1AndName2",
            name: "name1",
            meta: {
                title: "page4-name1"
            },
            components: {
                default: () => import("../views/page4/names/name1.vue"),
                name2: () => import("../views/page4/names/name2.vue"),
            },
        }, {
            path: "Name1AndName3",
            name: "name2",
            meta: {
                title: "page4-name2"
            },
            components: {
                default: () => import("../views/page4/names/name1.vue"),
                name3: () => import("../views/page4/names/name3.vue"),
            },
        }],
    },
    {
        path: '/images',
        name: 'images',
        meta: {
            title: "images"
        },
        component: () => import('../views/images/index.vue')
    },
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: (to, from, savePosition) => {
        // NOTE(2023-03-28 14:30:52 谭人杰): 记录页面的滚动值
        // NOTE(2023-03-28 14:30:21 谭人杰): 支持同步 也支持异步
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    {
                        top: savePosition?.top ?? 0,
                        left: savePosition?.left ?? 0,
                    }
                )
            }, 2000)
        })
    }
})
// NOTE(2023-03-28 11:49:19 谭人杰): 前置路由守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ?? "";
    next()
})
// NOTE(2023-03-28 11:49:19 谭人杰): 后置路由守卫
router.afterEach((to, from, next) => {
})
// 导出
export default router