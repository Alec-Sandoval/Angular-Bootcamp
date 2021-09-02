import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mcc-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent implements OnInit {
  public messageForm = this.formBuilder.group({
    to: ["", Validators.email],
    subject: ["", Validators.required],
    message: ""
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public sendMessage() {
    /* Normally, this is where we'd use a service to send our message: */
    alert(`Message Form Value: ${JSON.stringify(this.messageForm.value)}`);
  }
}
