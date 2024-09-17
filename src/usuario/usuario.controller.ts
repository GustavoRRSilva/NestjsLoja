import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

//Dentro do controler coloca a rota
@Controller('/usuarios')
export class UsuarioController{

    
    constructor(private usuarioRepository:UsuarioRepository){}

    //Tipo da requisição
    @Post()
    //Rota
    async criaUsuario(@Body() dadosDoUsuario){
        this.usuarioRepository.salvar(dadosDoUsuario)
        return {dadosDoUsuario};
    }

    @Get()
    async pegaUsers(){
        return this.usuarioRepository.getUsers();
    }

}