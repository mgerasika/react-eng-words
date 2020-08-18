/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DeliveryTypeEnum} from './enum';
import {UserEventInfoModel,BusinessHoursPeriodModel} from './model';

export interface StoreOpeningHoursUpdatedEventModel{ 
	EventName?:string
	StoreId?:integer
	StoreGroupId?:integer
	User?:UserEventInfoModel
	DeliveryType?:DeliveryTypeEnum
	BusinessHoursPeriodOld?:BusinessHoursPeriodModel
	BusinessHoursPeriod?:BusinessHoursPeriodModel
	Description?:string
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}