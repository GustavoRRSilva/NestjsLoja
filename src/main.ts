import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      whitelist:true,//Ignorar todas as propriedades que vierem no json que não estão no dto
      forbidNonWhitelisted:true,//Lançar o erro se alguem enviar algo que não tem no json do DTO
    })
  );
  await app.listen(3000);
}
bootstrap();
