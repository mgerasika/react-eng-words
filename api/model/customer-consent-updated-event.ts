/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel} from './model';

export interface CustomerConsentUpdatedEventModel{ 
	EventName?:string
	Enabled?:boolean
	Description?:string
	User?:UserEventInfoModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}