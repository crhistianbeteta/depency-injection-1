import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UseClassMainComponent } from './useClass/use-class-main/use-class-main.component';
import { UseExistingMainComponent } from './useExisting/use-class-main/use-existing-main.component';
import { UseValueMainComponent } from './useValue/use-value-main/use-value-main.component';
import { UseFactoryMainComponent } from './useFactory/use-factory-main/use-factory-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UseClassMainComponent,
    UseExistingMainComponent,
    UseValueMainComponent,
    UseFactoryMainComponent],
  template: `
  <app-use-class-main></app-use-class-main>
  <app-use-existing-main></app-use-existing-main>
  <app-use-value-main></app-use-value-main>
  <app-use-factory-main></app-use-factory-main>
  `,


})
export class AppComponent {
  title = 'dependency-injection';



}
