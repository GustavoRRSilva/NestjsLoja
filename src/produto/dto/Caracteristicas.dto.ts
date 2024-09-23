import { IsString } from "class-validator";

export class CaracteristicasDto{
    @IsString()
    nome:string;

    @IsString()
    descricao:string;
}

