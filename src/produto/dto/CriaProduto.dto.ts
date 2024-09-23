import { IsArray, IsDataURI, IsDateString, IsNotEmpty, IsNumber, IsNumberString, isNumberString, isString, IsString,ValidateNested } from "class-validator";
import { CaracteristicasDto} from "./Caracteristicas.dto";
import {  Imagens } from "./Imagens.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO{
@IsNotEmpty()
nome:string;

@IsNumber()
valor:number;

@IsNumber()
quantidadeDisponivel:number;

@IsString()
descricao:string;

@ValidateNested()
@IsArray()
@Type(()=> CaracteristicasDto)
caracteristicas: CaracteristicasDto[];

@ValidateNested()
@IsArray()
@Type(()=> Imagens)
imagens:Imagens

@IsString()
categoria:string;

@IsDateString()
dataCriacao:Date;

@IsDateString()
dataAtualizacao:Date
}