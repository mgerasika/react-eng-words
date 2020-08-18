/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,MenuModel} from './model';

export interface MenuUploadedEventModel{ 
	EventName?:string
	Description?:string
	User?:UserEventInfoModel
	Menu?:MenuModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}