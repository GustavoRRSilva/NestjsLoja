import { ArrayMinSize, IsArray, IsDataURI, IsDateString, IsDecimal, IsNotEmpty, IsNumber, IsNumberString, isNumberString, IsPositive, isString, IsString,MaxLength,Min,MinLength,ValidateNested } from "class-validator";
import { CaracteristicasDto} from "./Caracteristicas.dto";
import {  Imagens } from "./Imagens.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO{
@IsNotEmpty()
nome:string;

@IsPositive()
@IsNumber({maxDecimalPlaces:2,allowNaN:false,allowInfinity:false})
@Min(1,{message:"o valor tem que ser maior que um"})
valor:number;

@IsNumber()
quantidadeDisponivel:number;

@IsString()
@MaxLength(1000)
descricao:string;

@ValidateNested()
@IsArray()
@ArrayMinSize(3)
@Type(()=> CaracteristicasDto)
caracteristicas: CaracteristicasDto[];

@ValidateNested()
@IsArray()
@ArrayMinSize(1)
@Type(()=> Imagens)
imagens:Imagens

@IsString()
@MinLength(6)
categoria:string;

@IsDateString()
dataCriacao:Date;

@IsDateString()
dataAtualizacao:Date
}