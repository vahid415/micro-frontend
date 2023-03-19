import {BehaviorSubject} from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import {IUser} from 'rc-features';
import {UserService} from '../user-crud/user.service';

@Component({
    selector: 'lib-container',
    templateUrl: './container.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit, OnDestroy {
    public usersObj$: BehaviorSubject<IUser[]> | undefined;

    constructor(private userService: UserService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.usersObj$ = this.userService.getUsers$();
        this.userService.addUser({id: 1, name: 'John', age: 20});
        this.userService.addUser({id: 2, name: 'Alex', age: 25});
    }

    ngOnDestroy() {
        this.userService.clearUserList().subscribe()
    }
}
