import { IsBoolean,  IsInt,  IsString,  Min, MinLength } from "class-validator";

export class CreateBookDto {

@IsString()
@MinLength(2)
title : string;   

@IsString()
@MinLength(3)
author: string; 

@IsInt()
@Min(1000)
year : number; 

@IsBoolean()
isAvailable:boolean;

}
