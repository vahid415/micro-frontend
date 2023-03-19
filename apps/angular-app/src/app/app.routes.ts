import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren: () => import('ng-features').then(m => m.NgFeaturesModule)}
];

