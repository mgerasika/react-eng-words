/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {OrderModel} from './model';

export interface OrderRatingUpdatedEventModel{ 
	EventName?:string
	Rating?:integer
	Description?:string
	Order?:OrderModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}