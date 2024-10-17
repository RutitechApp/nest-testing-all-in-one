import 'ejs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as ejs from 'ejs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Set the views directory
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Set the view engine to EJS
  app.setViewEngine('ejs');

  // Serve static assets from the 'public' folder
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(5656);
}
bootstrap();
