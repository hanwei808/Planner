import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import 'nprogress/nprogress.css'
import JavaScript from '@/router/modules/JavaScript'
import NotFoundComponent from '@/components/NotFoundComponent.vue'

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/home/index.vue'),
                meta: {
                    title: "首页",
                    requiresAuth: false
                }
            },
            {
                path: '/:catchAll(.*)',
                component: NotFoundComponent
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/about/index.vue'),
                meta: {
                    title: "关于",
                    requiresAuth: false
                }
            },
            ...JavaScript,
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router