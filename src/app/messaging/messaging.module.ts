import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MessagingComponent } from './messaging.component';
import { MessagingRoutingModule } from './messaging-routing.module';
import { MessageComponent } from './components/message/message.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { MessagingService } from './services';

@NgModule({
  declarations: [
    MessagingComponent,
    MessageComponent,
    MessageDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MessagingRoutingModule
  ],
  providers: [
    MessagingService
  ]
})
export class MessagingModule { }
