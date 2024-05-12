import { Component } from '@angular/core';
import { UseFactoryAComponent } from '../use-factory-a/use-factory-a.component';
import { UseFactoryBComponent } from '../use-factory-b/use-factory-b.component';



@Component({
  selector: 'app-use-factory-main',
  template: `
  <main class="main">
  <h2>Use Factory</h2>
  <div class="example-container">
    <app-use-factory-a/>
    <app-use-factory-b/>
  </div>

</main>`,
  standalone: true,
  imports: [
    UseFactoryAComponent,
    UseFactoryBComponent
  ]
})
export class UseFactoryMainComponent { }
