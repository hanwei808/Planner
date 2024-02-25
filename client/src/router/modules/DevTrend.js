import { RouterView } from "vue-router";

const pageModules = import.meta.glob('@/views/DevTrend/*/*.vue')
const children = Object.entries(pageModules).map(([path, component]) => {
    const name = RegExp(/\/src\/views\/(.*)\.vue/).exec(path)?.[1]
    return {
        path: `/${name}`,
        name,
        component,
        meta: {
            title: name.split('/')[1],
            requiresAuth: false
        }
    }
})

const routers = [
    {
        path: '/DevTrend',
        component: RouterView,
        meta: {
            title: 'DevTrend'
        },
        children
    },
]

export default routers