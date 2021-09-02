import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagingService {
  private _messages = new BehaviorSubject([]);
  public messages$ = this._messages.asObservable();

  constructor(private http: HttpClient) { }

  public getMessages() {
    this.http.get('assets/data.json').subscribe(data => {
      const messages = (data as any)?.messages || [];
      this._messages.next(messages);
    });
  }
}
