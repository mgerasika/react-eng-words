/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CurrencyEnum} from './enum';
import {CoordinatesModel} from './model';

export interface StoreSummaryModel{ 
	Id?:integer
	Name?:string
	MenuId?:integer
	Metadata?:string
	Currency?:CurrencyEnum
	Coordinates?:CoordinatesModel
	StoreTimezone?:string
	StoreGroupId?:integer
}