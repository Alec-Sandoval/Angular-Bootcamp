import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MessagingComponent } from './messaging.component';
import { MessagingRoutingModule } from './messaging-routing.module';
import { MessageComponent } from './components/message/message.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { MessagingService } from './services';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';

@NgModule({
  declarations: [
    MessagingComponent,
    MessageComponent,
    MessageDetailComponent,
    ComposeMessageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessagingRoutingModule
  ],
  providers: [
    MessagingService
  ]
})
export class MessagingModule { }
