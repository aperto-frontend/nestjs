import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from "body-parser";

function addMiddleware(expressApp): void {
    expressApp.use(bodyParser.json());
    expressApp.use(cors());
}

function setupExpress() {
    const expressApp = express();
    addMiddleware(expressApp);
    return expressApp;
}

async function bootstrap(port: number) {
	const app = await NestFactory.create(ApplicationModule, setupExpress());
	await app.listen(port);
}

bootstrap(3000);
