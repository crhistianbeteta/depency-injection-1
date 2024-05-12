import { Component, inject } from '@angular/core';
import { IdGeneratorService } from '../../services/id-generator.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-use-existing-a',
  template: `
  <div class="card-container">
  <div class="card">
    <p class="heading">A</p>
    <p> Created at</p>
    <p>{{createdAt}}</p>
    <p>{{generatedId$ | async}}</p>

  </div>
</div>`,
  standalone: true,
  imports: [AsyncPipe],

})
export class UseExistingAComponent {

  private readonly idGeneratorService = inject(IdGeneratorService);
  public createdAt = this.idGeneratorService.createdAt;

  public generatedId$ = this.idGeneratorService.generated$;


}
