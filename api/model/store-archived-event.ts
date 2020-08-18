/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,StoreModel} from './model';

export interface StoreArchivedEventModel{ 
	EventName?:string
	StoreId?:integer
	StoreGroupId?:integer
	User?:UserEventInfoModel
	Description?:string
	Store?:StoreModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}