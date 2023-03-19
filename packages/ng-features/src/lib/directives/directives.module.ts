import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IfLoadedDirective } from './if-loaded.directive';
import { HideAfterDirective } from './hide-with-delay.directive';

@NgModule({
  declarations: [HideAfterDirective, IfLoadedDirective],
  exports: [HideAfterDirective, IfLoadedDirective],
  imports: [CommonModule],
})
export class DirectivesModule {}
