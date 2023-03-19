import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesModule } from '../../directives/directives.module';
import { LoadingState } from '../../types/loading-state';
import { Hero, Heroes } from '../../mock-data/heros';

@Component({
  selector: 'lib-hide-with-delay',
  standalone: true,
  imports: [CommonModule, DirectivesModule, MatButtonModule],
  template: `
    <main>
      <h1>Structural Directives</h1>
      <section
        *libHideAfter="
          5000 as time;
          then placeholder;
          let counter = counter;
          let default
        "
        class="banner primary"
      >
        <h2>Temporary content</h2>
        <p>
          This layout should disappear in {{ default }} seconds. It disappears
          in: {{ counter }}
        </p>
      </section>
      <ng-template #placeholder let-linHiddenAfter="libHideAfter" let-myDefault>
        <section class="banner placeholder">
          <h2>Placeholder</h2>
          <p>
            Here was some content. It was visible for
            {{ linHiddenAfter }} seconds.
          </p>
        </section>
      </ng-template>

      <section class="banner secondary">
        <button mat-raised-button color="primary" (click)="onLoadHero()">Load Hero</button>
        <p *libIfLoaded="heroLoadingState">
          {{ heroLoadingState.data | json }}
        </p>
      </section>
    </main>
  `,
  styles: [
    `
      .banner {
        display: block;
        padding: 15px 15px;
        border-radius: 10px;
      }
      .primary {
        color: white;
        background-color: #3c4c8f;
      }
      .secondary {
        margin-top: 1rem;
        color: white;
        background-color: #626E79;
      }
      .placeholder {
        background-color: #ededed;
        border: dashed #e0e0e0 2px;
      }
    `,
  ],
})
export class HideWithDelayComponent {
  heroLoadingState: LoadingState<Hero> = { type: 'loading' };
  onLoadHero(): void {
    this.heroLoadingState = { type: 'loaded', data: Heroes[0] };
  }
}
