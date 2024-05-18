import { Component, inject } from '@angular/core';
import { MESSAGE_CREATOR_TOKEN } from '../../message-creator-injection-token';
import { IconMessageCreator, MessageCreator } from '../../message-creator';

@Component({
  selector: 'app-icon-message-creator-card',
  template: `
  <div class="card-container">
    <div class="card">
      <p class="heading">ICON LOGGER!</p>
      <p>{{infoMesagge}}</p>
      <p>{{warningMesage}}</p>
      <p>{{errorMessage}}</p>
    </div>
  </div>
`,
  standalone: true,
  providers: [
    { provide: MESSAGE_CREATOR_TOKEN, useClass: IconMessageCreator }
  ]
})
export class IconMessageCreatorCardComponent {
  private readonly logger = inject<MessageCreator>(MESSAGE_CREATOR_TOKEN);
  constructor() { }

  infoMesagge = this.logger.info("INFO MESSAGE!");
  warningMesage = this.logger.warning("WARNING MESSAGE!");
  errorMessage = this.logger.error('ERROR MESSAGE!');
}
