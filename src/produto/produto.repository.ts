import { Body, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository{
    private produtos = [];

    async cadastraProdutos( infoProdutos){
        this.produtos.push(infoProdutos)
    }
    async mostraProdutos(){
        return this.produtos;
    }
}

