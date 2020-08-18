/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,BusinessHoursOverrideModel} from './model';

export interface StoreBusinessHoursOverrideDeletedEventModel{ 
	EventName?:string
	StoreId?:integer
	StoreGroupId?:integer
	User?:UserEventInfoModel
	Description?:string
	BusinessHoursOverride?:BusinessHoursOverrideModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}