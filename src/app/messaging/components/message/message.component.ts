import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Message } from '../models';

@Component({
  selector: 'mcc-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() public message: Message = {} as Message;
  @Output() public buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onButtonClick() {
    this.buttonClicked.emit(this.message.subject);
  }

}
