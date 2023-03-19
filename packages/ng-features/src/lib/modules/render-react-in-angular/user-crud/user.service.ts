import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap, timer} from 'rxjs';

import {IUser} from 'rc-features';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private readonly users$$: BehaviorSubject<Array<IUser>> = new BehaviorSubject([] as Array<IUser>);
    readonly users$: Observable<Array<IUser>> = this.users$$;


    addUser(user: IUser) {
        const users = this.users$$.getValue();
        let lastUser = 0;
        if (users.length > 0) {
            lastUser = users[users.length - 1].id;
        }
        this.users$$.next([...users, {...user, id: lastUser + 1}]);
        return this.users$
    }

    updateUser(id: number, newUser: Partial<IUser>) {
        return timer(200).pipe(
            tap(() => {
                const user = this.users$$.getValue().find((user) => user.id === id);
                if (!user) {
                    return;
                }
                this._updateUsers(id, {...user, ...newUser});
            }),
        );
    }

    deleteUser(id: number) {
        return timer(200).pipe(
            tap(() => {
                const users = this.users$$.getValue().filter((user) => user.id !== id);
                if (!users) {
                    return;
                }
                this.users$$.next(users);
            }),
        );
    }


    getUsers$(): BehaviorSubject<Array<IUser>> {
        return this.users$$;
    }

    updateUserAge(id: number) {
        return timer(200).pipe(
            tap(() => {
                const user = this.users$$.getValue().find((user) => user.id === id);

                if (!user) {
                    return;
                }

                this._updateUsers(id, {...user, age: user.age + 1});
            }),
        );
    }

    clearUserList() {
        return timer(200).pipe(
            tap(() => {
                this.users$$.next([]);
            }),
        );
    }

    private _updateUsers(id: number, user: IUser) {
        const users = this.users$$.getValue();
        const result = users.map(el => el.id == id ? {...user} : el);
        this.users$$.next(result);
    }

}
