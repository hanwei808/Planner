import { RouteRecordRaw, RouterView } from "vue-router";

const routers: RouteRecordRaw[] = [
    {
        path: '/JavaScript',
        component: RouterView,
        meta: {
            title: 'JavaScript'
        },
        children: [
            {
                path: '00',
                component: () => import('@/views/JavaScript/00.关键字与API.vue'),
                meta: {
                    title: '00.关键字与API',
                    requiresAuth: false
                }
            },
            {
                path: '01',
                component: () => import('@/views/JavaScript/01.数据类型.vue'),
                meta: {
                    title: '01.数据类型',
                    requiresAuth: false
                }
            },
            {
                path: '02',
                component: () => import('@/views/JavaScript/02.运算符与控制流.vue'),
                meta: {
                    title: '02.运算符与控制流',
                    requiresAuth: false
                }
            },
            {
                path: '03',
                component: () => import('@/views/JavaScript/03.作用域和变量.vue'),
                meta: {
                    title: '03.作用域和变量',
                    requiresAuth: false
                }
            },
            {
                path: '04',
                component: () => import('@/views/JavaScript/04.this与class与new.vue'),
                meta: {
                    title: '04.this与class与new',
                    requiresAuth: false
                }
            },
            {
                path: '05',
                component: () => import('@/views/JavaScript/05.call与apply与bind.vue'),
                meta: {
                    title: '05.call与apply与bind',
                    requiresAuth: false
                }
            },
            {
                path: '06',
                component: () => import('@/views/JavaScript/06.原型与原型链.vue'),
                meta: {
                    title: '06.原型与原型链',
                    requiresAuth: false
                }
            },
            {
                path: '07',
                component: () => import('@/views/JavaScript/07.继承与扩展.vue'),
                meta: {
                    title: '07.继承与扩展',
                    requiresAuth: false
                }
            },
            {
                path: '08',
                component: () => import('@/views/JavaScript/08.对象与数组.vue'),
                meta: {
                    title: '08.对象与数组',
                    requiresAuth: false
                }
            },
            {
                path: '09',
                component: () => import('@/views/JavaScript/09.拷贝与递归.vue'),
                meta: {
                    title: '09.拷贝与递归',
                    requiresAuth: false
                }
            },
            {
                path: '10',
                component: () => import('@/views/JavaScript/10.函数与闭包.vue'),
                meta: {
                    title: '10.函数与闭包',
                    requiresAuth: false
                }
            },
            {
                path: '11',
                component: () => import('@/views/JavaScript/11.节流与防抖.vue'),
                meta: {
                    title: '11.节流与防抖',
                    requiresAuth: false
                }
            },
            {
                path: '12',
                component: () => import('@/views/JavaScript/12.异步编程.vue'),
                meta: {
                    title: '12.异步编程',
                    requiresAuth: false
                }
            },
            {
                path: '13',
                component: () => import('@/views/JavaScript/13.错误与异常.vue'),
                meta: {
                    title: '13.错误与异常',
                    requiresAuth: false
                }
            },
        ]
    },
]

export default routers