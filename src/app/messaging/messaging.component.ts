import { Component, OnInit } from '@angular/core';

import { Message } from './models';

@Component({
  selector: 'mcc-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  public messages: Message[] = [
    {
      sender: 'John Smith',
      recipient: 'Jane Doe',
      dateSent: new Date('2021-04-01T14:48:00.000Z'),
      subject: 'Lorem ipsum dolor sit amet',
      message: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      sender: 'James Allan',
      recipient: 'Jane Doe',
      dateSent: new Date('2021-04-01T15:34:00.000Z'),
      subject: 'Consectetur adipiscing elit',
      message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
