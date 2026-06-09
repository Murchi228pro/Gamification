
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {path: "/", component: () => import('../components/Home')},
    {path: "/fortune_wheel", component: () => import('../components/Games/FortuneWheel')},
    {path: "/wordle", component: () => import('../components/Games/Wordle')},
    {path: "/miner", component: () => import('../components/Games/MinesWeeper')},
    {path: "/profile", component: () => import('../components/Profile')},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})