import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingComponent } from './messaging.component';
import { MessagingRoutingModule } from './messaging-routing.module';
import { MessageComponent } from './components/message/message.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';

@NgModule({
  declarations: [
    MessagingComponent,
    MessageComponent,
    MessageDetailComponent
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule
  ]
})
export class MessagingModule { }
