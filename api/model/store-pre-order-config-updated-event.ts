/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,PreOrderConfigModel} from './model';

export interface StorePreOrderConfigUpdatedEventModel{ 
	EventName?:string
	StoreId?:integer
	User?:UserEventInfoModel
	Description?:string
	PreOrderConfig?:PreOrderConfigModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}