import { createWebHistory, createRouter } from 'vue-router'

import MovieDetail from './components/MovieDetail.vue'
import Home from './components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/movies/:id',
        name: 'Moviedetail',
        component: MovieDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;