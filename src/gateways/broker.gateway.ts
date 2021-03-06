import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse, } from '@nestjs/websockets';
import { Observable } from 'rxjs';

@WebSocketGateway()
export class BrokerGateway {
  @WebSocketServer() server;

  @SubscribeMessage('events')
  onEvent(): Observable<WsResponse<number>> {
      let i = 1;
      return Observable.create((observer) => {
          setInterval(() => {
              observer.next({event: 'events', data: i++});
          }, 1000);
      });
  }
}
