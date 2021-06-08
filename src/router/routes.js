import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/Home.vue'
import Practice from '@views/Practice.vue'
import About from '@views/About.vue'
import Quiz from '@views/Quiz.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/practice',
        name: 'Practice',
        component: Practice,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router