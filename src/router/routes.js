import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home.vue"),
    },
    {
        path: '/practice',
        name: 'Practice',
        component: () => import("../views/Practice.vue"),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../views/About.vue"),
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: () => import("../views/Quiz.vue"),
    },
    {
        path: '/finalize',
        name: 'Finalize',
        component: () => import("../views/Finalize.vue"),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router