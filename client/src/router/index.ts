import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import 'nprogress/nprogress.css'
import permission from '@/router/modules/permission'
import user from '@/router/modules/user'
import chapter from '@/router/modules/chapter'
import NotFoundComponent from '@/components/NotFoundComponent.vue'

const routes: RouteRecordRaw[] = [
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
            user,
            permission,
            ...chapter,
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
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router