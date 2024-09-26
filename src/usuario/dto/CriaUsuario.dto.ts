import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/emailUnico.validator";


export class CriaUsuarioDTO{


    @IsNotEmpty({message:'O nome não pode ser vazio'})
    nome:string;
    
    @IsEmail(undefined,{message:'O email informado é invalido'})
    @EmailUnico({message:"Email em uso, favor utilizar outro"})
    email:string;

    @MinLength(6, {message:'a senha precisa ter no minimo 6 caracteres'})
    senha:string;
}