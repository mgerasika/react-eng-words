/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,MenuModel} from './model';

export interface MenuCheckpointCreatedEventModel{ 
	Description?:string
	User?:UserEventInfoModel
	Menu?:MenuModel
	EventName?:string
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}