/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,StoreKioskSettingModel} from './model';

export interface StoreKioskSettingUpdatedEventModel{ 
	EventName?:string
	StoreId?:integer
	User?:UserEventInfoModel
	Description?:string
	StoreKioskSetting?:StoreKioskSettingModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}