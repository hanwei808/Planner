import { RouterView } from "vue-router";

const pageModules = import.meta.glob('@/views/Vue/*/*.vue')
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
        path: '/Vue',
        component: RouterView,
        meta: {
            title: 'Vue'
        },
        children
    },
]

export default routers