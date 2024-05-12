import { Component, inject } from '@angular/core';
import { IdGeneratorService } from '../../services/id-generator.service';
import { AsyncPipe } from '@angular/common';
import { LoggerService } from '../../services/logger.service';

const createLogger = (prefix: string): LoggerService => {
  const logger = new LoggerService();
  logger.prefix = prefix
  return logger
}

@Component({
  selector: 'app-use-factory-a',
  template: `
  <div class="card-container">
  <div class="card">
    <p class="heading">A</p>
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
    {
      provide: 'PREFIX',
      useValue: 'FACTORY A'
    },
    {
      provide: LoggerService,
      useFactory: createLogger,
      deps: ['PREFIX']
    }

  ]
})
export class UseFactoryAComponent {


  private readonly idGeneratorService = inject(IdGeneratorService);
  public createdAt = this.idGeneratorService.createdAt;

  public generatedId$ = this.idGeneratorService.generated$;


}
