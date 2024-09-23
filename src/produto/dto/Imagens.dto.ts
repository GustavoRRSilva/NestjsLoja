import { IsString, IsUrl } from "class-validator";

export class Imagens{
    @IsUrl()
    url:string;

    @IsString()
    descricao:string;
}

