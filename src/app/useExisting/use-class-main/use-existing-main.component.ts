import { Component } from '@angular/core';
import { UseExistingAComponent } from '../use-class-a/use-existing-a.component';
import { UseExistingBComponent } from '../use-class-b/use-existing-b.component';
import { IdGeneratorService } from '../../services/id-generator.service';

@Component({
  selector: 'app-use-existing-main',
  template: `
  <main class="main">
  <h2>Use Existing</h2>
  <div class="example-container">
    <app-use-existing-a />
    <app-use-existing-b />
  </div>

</main>`,
  standalone: true,
  imports: [
    UseExistingAComponent,
    UseExistingBComponent
  ],
  providers: [
    IdGeneratorService
  ]
})
export class UseExistingMainComponent { }
