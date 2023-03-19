import {NGElementsModule} from "./lib/ng-element.module";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export * from './lib/ng-element.module';


platformBrowserDynamic()
    .bootstrapModule(NGElementsModule)
    .catch((err) => console.error(err));


console.log('loaded')
