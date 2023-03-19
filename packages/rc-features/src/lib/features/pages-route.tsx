import {lazy} from 'react';
import {Navigate} from "react-router-dom";
import {RouteObject} from "react-router/dist/lib/context";


const UseAngular = lazy(() => import('../features/use-angular/use-angular'));


const PagesRoutes: Array<RouteObject> = [
    {
        path: 'first',
        element: <UseAngular/>,
    },
    {
        path: 'second',
        element: <UseAngular/>,
    },
    {path: "", element: <Navigate replace to="first"/>},

];

export default PagesRoutes;
