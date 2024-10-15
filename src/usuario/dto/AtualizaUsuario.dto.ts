import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailUnico } from '../validacao/emailUnico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é invalido' })
  @EmailUnico({ message: 'Email em uso, favor utilizar outro' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'a senha precisa ter no minimo 6 caracteres' })
  @IsOptional()
  senha: string;
}
