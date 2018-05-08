import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  socket: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.socket = io('http://localhost:3000');

    const data = this.http.get('http://localhost:3000');

    data.subscribe(console.log);

    this.socket.on('connect', () => console.log('connected'));
    this.socket.on('events', (d) => console.log(d));

    this.socket.emit('events');
  }
}
