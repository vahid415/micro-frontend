import {filter, of, switchMap} from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {IUser} from 'rc-features';
import {UserService} from './user.service';
import {AddUserDialogComponent} from "./add-user-dialog.component";

@Component({
    selector: 'lib-user-list-view',
    templateUrl: './user-list-view.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListViewComponent {
    readonly users$ = this.userService.users$ ? this.userService.users$ : of([] as any);
    readonly displayedColumns: string[] = ['id', 'name', 'age', 'actions'];

    constructor(private userService: UserService, public dialog: MatDialog) {
    }


    addAge(id: number) {
        this.userService.updateUserAge(id).subscribe();
    }

    openDialog(): void {
        this.dialog.open(AddUserDialogComponent, {
            data: {},
        }).afterClosed()
            .pipe(
                filter(Boolean),
                switchMap((newUser: IUser) => this.userService.addUser(newUser)),
            )
            .subscribe();
    }

    delete(id: number) {
        this.userService.deleteUser(id).subscribe();
    }
}
