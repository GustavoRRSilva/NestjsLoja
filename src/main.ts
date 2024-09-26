import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      whitelist:true,//Ignorar todas as propriedades que vierem no json que não estão no dto
      forbidNonWhitelisted:true,//Lançar o erro se alguem enviar algo que não tem no json do DTO
    })
  );
  //Resolver as dependecias da classe do mesmo jeito que o nestjsUtiliza
  useContainer(app.select(AppModule),{fallbackOnErrors:true});

  await app.listen(3000);

}
bootstrap();
