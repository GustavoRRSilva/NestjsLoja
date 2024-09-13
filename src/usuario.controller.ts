import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

//Dentro do controler coloca a rota
@Controller('/usuarios')
export class UsuarioController{

    private usuarioRepository = new UsuarioRepository();
    //Tipo da requisição
    @Post()
    //Rota
    async criaUsuario(@Body() dadosDoUsuario){
        this.usuarioRepository.salvar(dadosDoUsuario)
        return {dadosDoUsuario};
    }



}