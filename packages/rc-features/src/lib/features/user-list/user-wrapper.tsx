import * as React from 'react';
import {useMemo, useState} from 'react';
import * as ReactDOM from 'react-dom/client';
import {BehaviorSubject} from 'rxjs';
import {Injector} from '@angular/core';

import {IUser} from './user';
import UserList from './user-list';

interface userWrapperProps {
    injector: Injector;
    users$: BehaviorSubject<IUser[]> | undefined;
}

const ChildMemo = React.memo(UserList)
const UserWrapper = (props: userWrapperProps) => {
    const [users] = useState(props.users$);
    const value = useMemo(() => (users), [])
    return (
            <div className={'renderer'}>
                <h2>ReactJS component (bidirectional data binding): </h2>
                <br/>
                <ChildMemo users$={value}/>
            </div>
    );
};

export class UserInitializer {
    static initialize(
            containerId: string,
            injector: Injector,
            users$: BehaviorSubject<Array<IUser>> | undefined
    ) {

        const root = ReactDOM.createRoot(document.getElementById(containerId) as HTMLElement);
        root.render(
                <UserWrapper injector={injector} users$={users$}/>
        );
    }
}
