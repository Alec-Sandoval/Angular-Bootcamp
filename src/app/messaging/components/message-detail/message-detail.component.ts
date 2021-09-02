import { Component, Input } from '@angular/core';

import { Message } from '../../models';

@Component({
  selector: 'mcc-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent {
  @Input() public message: Message = {} as Message;
}
