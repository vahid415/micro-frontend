import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NgFeatureRoutingModule } from './ng-features.routing.module';

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, MatSidenavModule, NgFeatureRoutingModule, SidebarComponent]
})
export class NgFeaturesModule {}
