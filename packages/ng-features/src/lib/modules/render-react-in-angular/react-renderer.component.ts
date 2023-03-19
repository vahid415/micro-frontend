import {BehaviorSubject} from 'rxjs';
import {Component, Injector, Input, OnInit} from '@angular/core';
import {IUser, UserInitializer} from 'rc-features';

@Component({
    selector: 'lib-react-renderer',
    template: `
        <div class="react-container" id="react-renderer"></div>`,
})
export class ReactRendererComponent implements OnInit {
    @Input() users$: BehaviorSubject<IUser[]> | undefined;

    constructor(public injector: Injector) {
    }

    ngOnInit() {

        UserInitializer.initialize(
            'react-renderer',
            this.injector,
            this.users$
        );
    }
}
