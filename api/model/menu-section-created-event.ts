/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,MenuSectionModel} from './model';

export interface MenuSectionCreatedEventModel{ 
	MenuId?:integer
	Description?:string
	User?:UserEventInfoModel
	MenuSection?:MenuSectionModel
	EventName?:string
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}