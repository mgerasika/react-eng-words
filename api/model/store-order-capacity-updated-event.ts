/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,StoreOrderCapacityConfigEditModelModel} from './model';

export interface StoreOrderCapacityUpdatedEventModel{ 
	EventName?:string
	StoreId?:integer
	User?:UserEventInfoModel
	Description?:string
	OrderCapacityConfig?:StoreOrderCapacityConfigEditModelModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}