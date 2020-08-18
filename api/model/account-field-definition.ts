/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {KeyEnum,TypeEnum} from './enum';

export interface AccountFieldDefinitionModel{ 
	Key?:KeyEnum
	DisplayName?:string
	Type?:TypeEnum
	MinLength?:integer
	MaxLength?:integer
	DigitsOnly?:boolean
	Regex?:string
}