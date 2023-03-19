import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
    declarations: [CheckboxComponent],
    imports: [BrowserModule, CommonModule],
})
export class NGElementsModule implements DoBootstrap {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        const el = createCustomElement(CheckboxComponent, {
            injector: this.injector,
        });

        customElements.define(`el-checkbox`, el);
    }
}
