import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
@Component({
  selector: 'app-iochat',
  templateUrl: './iochat.component.html',
  styleUrls: ['./iochat.component.css']
})
export class IochatComponent {
  private socket: any;
  messages: string[] = [];
  message: string = '';

  constructor() {
    this.socket = io('http://localhost:3001');
  }

  ngOnInit() {
    this.socket.on('message', (message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socket.emit('message', this.message);
    this.message = '';
  }
}
