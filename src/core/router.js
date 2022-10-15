import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Single from '../pages/SingleCourse.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/course/:slug',
        name: 'Course',
        component: Single
    }
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
