import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";

import {ReactRendererComponent} from './react-renderer.component';
import {ContainerComponent} from "./ng-container/container.component";
import {UserListViewComponent} from './user-crud/user-list-view.component';
import {AddUserDialogComponent} from "./user-crud/add-user-dialog.component";

@NgModule({
    declarations: [ContainerComponent, ReactRendererComponent, UserListViewComponent, AddUserDialogComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: '', component: ContainerComponent}]),
    ],
})
export class ReactRendererModule {
}
