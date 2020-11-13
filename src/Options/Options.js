import { lazy } from "react";

export const options = [
    {
        path: "/",
        label: "Home",
        exact: true,
        component: lazy(
            () => import("../Containers/Home/Home")),
    },
    {
        path: "/movies",
        label: "Movies",
        exact: true,
        component: lazy(() => import("../Containers/Movies/Movies")),
    },
    {
        path: "/movies/:id",
        label: "SingleMovie",
        exact: false,
        component: lazy(() => import("../Containers/Movies/Id/Id")),
    },
];
