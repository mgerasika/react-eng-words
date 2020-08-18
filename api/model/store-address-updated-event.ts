/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,StoreAddressModel} from './model';

export interface StoreAddressUpdatedEventModel{ 
	EventName?:string
	StoreId?:integer
	StoreGroupId?:integer
	User?:UserEventInfoModel
	Description?:string
	StoreAddress?:StoreAddressModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}