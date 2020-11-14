import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //decorator가 없는 property의 Object는 해당 Property를 걸러버린다. 즉, 특정 Object를 생성할 때 request에서 보내는 Property가 decorator가 없으면 해당 property 걸러버린 다는 소리 
    forbidNonWhitelisted: true, //whitelist 처럼 property를 거르지도 않고 그냥 에러를 만들어 낸다.
    transform: true //transform을 true로 하게되면, URL에서 받는 파라미터들이 원하는 타입으로 알아서 컨버팅된다.
  }))
  await app.listen(3000);
}
bootstrap();
