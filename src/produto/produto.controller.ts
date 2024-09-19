import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController{

   constructor(private produto:ProdutoRepository){

   }
   @Post()
   async criaProduto(@Body() infosProduto:any){
    this.produto.cadastraProdutos(infosProduto)
    return{produto:infosProduto}
   }

   @Get()
   async listaProduto(){
    return this.produto.mostraProdutos();
   }
}