import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BrokerGateway } from './gateways/broker.gateway';

@Module({
  imports: [
  ],
  controllers: [
      AppController,
  ],
  providers: [
      BrokerGateway,
  ],
})
export class ApplicationModule {
    constructor() {}
}
