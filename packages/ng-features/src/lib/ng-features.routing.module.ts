import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import {LayoutComponent} from './layout/layout.component';

const featureRoutes: Array<Route> = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'form',
                loadComponent: () =>
                    import('./modules/dynamic-form/dynamic-form.component').then(
                        (com) => com.DynamicFormComponent
                    ),
            },
            {
                path: 'directive',
                loadComponent: () =>
                    import('./modules/hide-with-delay/hide-with-delay.component').then(
                        (com) => com.HideWithDelayComponent
                    ),
            },
            {
                path: 'react-in-angular',
                loadChildren: () =>
                    import('./modules/render-react-in-angular/react-renderer.module').then(
                        (com) => com.ReactRendererModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(featureRoutes)],
    exports: [RouterModule],
})
export class NgFeatureRoutingModule {
}
