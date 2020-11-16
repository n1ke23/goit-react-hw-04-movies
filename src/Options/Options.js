import { lazy } from "react";

export const routes = [
    {
        path: "/",
        exact: true,
        component: lazy(() => import("./../Conteiners/Home/Home")),
    },
    {
        path: "/movies",
        exact: true,
        component: lazy(() => import("./../Conteiners/Movies/Movies")),
    },
    {
        path: "/movies/:id",
        exact: false,
        component: lazy(() => import("./../Conteiners/Movies/Id/Id")),
    },
];
export const navLinks = [
    {
        name: 'Home',
        to: '/',
        exact: true,
    },
    {
        name: 'Movies',
        to: '/movies',
        exact: false,
    }
];

