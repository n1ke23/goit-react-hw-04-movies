import { lazy } from "react";
// import { useRouteMatch } from 'react-router-dom';
// const match = useRouteMatch()
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

export const moviesRouts = [
    {
        path: `/movies/:id/cast`,
        exact: true,
        component: lazy(() => import("./../Conteiners/Movies/Id/Cast/Cast")),
    },
    {
        path: `/movies/:id/reviev`,
        exact: true,
        component: lazy(() => import("./../Conteiners/Movies/Id/Reviev/Reviev")),
    },
]

