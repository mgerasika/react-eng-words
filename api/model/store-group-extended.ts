/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CurrencyEnum} from './enum';
import {GroupedCoordinatesModel,StoreHeaderModel} from './model';

export interface StoreGroupExtendedModel{ 
	TotalStores?:integer
	GroupedCoordinates?:GroupedCoordinatesModel[]
	StoreHeaders?:StoreHeaderModel[]
	StoreGroupId?:integer
	GeneralRating?:number
	GeneralRatingCount?:integer
	Name?:string
	Currency?:CurrencyEnum
}