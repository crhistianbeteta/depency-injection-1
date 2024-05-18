import { Component, OnInit } from '@angular/core';
import { DateMessageCreatorCardComponent } from '../date-message-creator-card/date-message-creator-card.component';
import { IconMessageCreatorCardComponent } from '../icon-message-creator-card/icon-message-creator-card.component';

@Component({
  selector: 'app-message-creators-main',
  template: `
   <main class="main">
  <h2>Injection Token</h2>
  <div class="example-container">
    <app-date-message-creator-card/>
    <app-icon-message-creator-card/>
  </div>
</main>`,
  standalone: true,
  imports: [
    DateMessageCreatorCardComponent,
    IconMessageCreatorCardComponent
  ]

})
export class MessageCreatorsMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
