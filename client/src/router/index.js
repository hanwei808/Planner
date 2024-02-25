import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import 'nprogress/nprogress.css'
import JavaScript from '@/router/modules/JavaScript'
import Vue from '@/router/modules/Vue'
import Network from '@/router/modules/Network'
import NodeJS from '@/router/modules/NodeJS'
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
            ...Vue,
            ...Network,
            ...NodeJS
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router