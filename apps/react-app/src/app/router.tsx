import {lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";

import {PagesRoute} from "rc-features";


const AppLayout = lazy(() =>
        import('rc-features').then(module => ({
            default: module.AppLayout,
        }))
);


export default function RoutesHook() {
    return useRoutes([
        {
            path: "",
            element: <AppLayout/>,
            children: PagesRoute
        },
        {path: "", element: <Navigate replace to="first"/>},
    ]);
}
