import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import {v4 as vuuid} from 'uuid'

//Dentro do controler coloca a rota
@Controller('/usuarios')
export class UsuarioController{

    
    constructor(private usuarioRepository:UsuarioRepository){}

    //Tipo da requisição
    @Post()
    //Rota
    async criaUsuario(@Body() dadosDoUsuario:CriaUsuarioDTO){
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = vuuid();
        this.usuarioRepository.salvar(usuarioEntity)
        return {id:usuarioEntity.id,
                message:"Usuario criado com sucesso!"};
    }

    @Get()
    async pegaUsers(){
        return this.usuarioRepository.getUsers();
    }

}