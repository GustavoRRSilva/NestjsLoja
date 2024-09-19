import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import {UsuarioModule} from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [UsuarioModule,ProdutoModule],
  //Importação da arvóre do usuario

})
export class AppModule {}
