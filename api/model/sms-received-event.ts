/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {SmsInfoModel} from './model';

export interface SmsReceivedEventModel{ 
	EventName?:string
	Description?:string
	SmsInfo?:SmsInfoModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}