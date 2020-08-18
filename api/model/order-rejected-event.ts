/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {OrderModel} from './model';

export interface OrderRejectedEventModel{ 
	EventName?:string
	Description?:string
	OrderRejectedTime?:string
	Reason?:string
	Order?:OrderModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}