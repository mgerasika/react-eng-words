/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,DeliveryZoneModel} from './model';

export interface DeliveryZoneUpdatedEventModel{ 
	EventName?:string
	StoreId?:integer
	StoreGroupId?:integer
	User?:UserEventInfoModel
	Description?:string
	DeliveryZone?:DeliveryZoneModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}