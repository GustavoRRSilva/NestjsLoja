import { Injectable, Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailUnicoValidator } from "./validacao/emailUnico.validator";



@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuarioRepository,EmailUnicoValidator]
})
export class UsuarioModule{};