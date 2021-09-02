import { Component, Input, OnInit } from '@angular/core';

import { Message } from '../../models';

@Component({
  selector: 'mcc-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() public message: Message = {} as Message;

  constructor() { }

  ngOnInit(): void {
  }

}
