import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from './models';
import { MessagingService } from './services';

@Component({
  selector: 'mcc-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  public messages$!: Observable<Message[]>;
  public selectedMessage: Message | null = null;
  public composingMessage: boolean = false;

  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.messagingService.getMessages();
    this.messages$ = this.messagingService.messages$;
  }

  public selectMessage(message: Message) {
    if (this.composingMessage) return;
    this.selectedMessage = this.selectedMessage !== message ? message : null;
  }

  public composeMessage() {
    this.composingMessage = true;
    this.selectedMessage = null;
  }
}
