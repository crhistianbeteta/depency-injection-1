import { Component } from '@angular/core';
import { UseValueAComponent } from '../use-value-a/use-value-a.component';
import { UseValueBComponent } from '../use-value-b/use-value-b.component';

@Component({
  selector: 'app-use-value-main',
  template: `
  <main class="main">
  <h2>Use Value</h2>
  <div class="example-container">
    <app-use-value-a/>
    <app-use-value-b/>
  </div>

</main>`,
  standalone: true,
  imports: [
    UseValueAComponent,
    UseValueBComponent
  ]
})
export class UseValueMainComponent { }
