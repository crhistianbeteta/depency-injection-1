import { Component, inject } from '@angular/core';
import { IdGeneratorService } from '../../services/id-generator.service';
import { AsyncPipe } from '@angular/common';
import { LoggerService } from '../../services/logger.service';

const customLogger = {
  log: (message: string) => {
    console.log(`${message.toUpperCase()} END LOG`)
  }
}
@Component({
  selector: 'app-use-value-b',
  template: `
  <div class="card-container">
  <div class="card">
    <p class="heading">B</p>
    <p> Created at</p>
    <p>{{createdAt}}</p>
    <p>{{generatedId$ | async}}</p>

  </div>
</div>
`,
  standalone: true,
  imports: [AsyncPipe],
  providers: [
    IdGeneratorService,
    { provide: LoggerService, useValue: customLogger }
  ]
})
export class UseValueBComponent {


  private readonly idGeneratorService = inject(IdGeneratorService);
  public createdAt = this.idGeneratorService.createdAt;

  public generatedId$ = this.idGeneratorService.generated$;


}
