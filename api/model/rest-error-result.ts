/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {ValidationErrorResultModel} from './model';

export interface RestApiErrorResultModel{ 
	Message:string
	StackTrace?:string
	Errors?:ValidationErrorResultModel[]
}