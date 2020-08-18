/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,HydraConfigModel} from './model';

export interface HydraSettingChangedEventModel{ 
	User?:UserEventInfoModel
	HydraConfig?:HydraConfigModel
	EventName?:string
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}