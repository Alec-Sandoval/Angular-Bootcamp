import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MessagingComponent } from './messaging.component';

const routes: Routes = [
  { path: 'messaging', component: MessagingComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MessagingRoutingModule { }
