import { createWebHistory, createRouter } from "vue-router";
import Csapp from "@/views/Csapp";
import Home from "@/views/Home";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/csapp",
        name: "CS-App",
        component: Csapp,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
