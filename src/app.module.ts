import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import {BrokerGateway} from "./broker/broker.gateway";

@Module({
  imports: [
  ],
  controllers: [
    AppController
  ],
  components: [
      BrokerGateway
  ]
})
export class ApplicationModule {
    constructor() {}
}
