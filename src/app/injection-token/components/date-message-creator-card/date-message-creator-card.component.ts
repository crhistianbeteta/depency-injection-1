import { Component, inject } from '@angular/core';
import { MESSAGE_CREATOR_TOKEN } from '../../message-creator-injection-token';
import { DateMessageCreator, MessageCreator } from '../../message-creator';

@Component({
  selector: 'app-date-message-creator-card',
  template: `
    <div class="card-container">
    <div class="card">
      <p class="heading">DATE LOGGER!</p>
      <p>{{infoMesagge}}</p>
      <p>{{warningMesage}}</p>
      <p>{{errorMessage}}</p>
    </div>
  </div>
  `,

  standalone: true,
  providers: [
    { provide: MESSAGE_CREATOR_TOKEN, useClass: DateMessageCreator }
  ]
})
export class DateMessageCreatorCardComponent {

  private readonly messageCreator = inject<MessageCreator>(MESSAGE_CREATOR_TOKEN);
  constructor() { }

  infoMesagge = this.messageCreator.info("INFO MESSAGE!");
  warningMesage = this.messageCreator.warning("WARNING MESSAGE!");
  errorMessage = this.messageCreator.error('ERROR MESSAGE!');

}
