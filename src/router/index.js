import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Connexion from '@/views/Connexion.vue';
import Inscription from '@/views/Inscription.vue';


const routes = [
    {
        name: 'Home',
        path: '/',
        component : Home,
    },
    {
        name: 'Connexion',
        path: '/connexion',
        component : Connexion,
    },
    {
        name: 'Inscription',
        path: '/inscription',
        component : Inscription,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router