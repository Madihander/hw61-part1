import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue"
import BlockPage from "@/pages/BlockPage.vue"
import TransactionPage from "@/pages/TransactionPage.vue"
const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/block/:blockNumberHash',
        component: BlockPage,
    },
    {
        path: '/transaction/:transHash',
        component: TransactionPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router