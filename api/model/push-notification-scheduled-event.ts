/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,PushNotificationRequestModel} from './model';

export interface PushNotificationScheduledEventModel{ 
	EventName?:string
	User?:UserEventInfoModel
	Description?:string
	PushNotification?:PushNotificationRequestModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}