import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  socket: any;

  counter$: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.socket = io('http://localhost:3000');

    const data = this.http.get('http://localhost:3000');

    data.subscribe(console.log);

    this.socket.on('connect', () => console.log('connected'));
    this.socket.on('events', data => this.counter$.next(data));

    this.socket.emit('events');
  }
}
