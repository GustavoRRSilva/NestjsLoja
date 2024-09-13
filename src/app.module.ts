import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';


@Module({
  imports: [],
  //Importação da arvóre do usuario
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
