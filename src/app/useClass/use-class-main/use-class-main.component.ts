import { Component, OnInit } from '@angular/core';
import { UseClassAComponent } from '../use-class-a/use-class-a.component';
import { UseClassBComponent } from '../use-class-b/use-class-b.component';

@Component({
  selector: 'app-use-class-main',
  template: `
  <main class="main">
  <h2>Use class</h2>
  <div class="example-container">
    <app-use-class-a />
    <app-use-class-b />
  </div>

</main>`,
  standalone: true,
  imports: [
    UseClassAComponent,
    UseClassBComponent
  ],

})
export class UseClassMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
