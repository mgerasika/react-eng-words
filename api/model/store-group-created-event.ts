/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,StoreGroupModel} from './model';

export interface StoreGroupCreatedEventModel{ 
	EventName?:string
	StoreGroupId?:integer
	User?:UserEventInfoModel
	Description?:string
	StoreGroup?:StoreGroupModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}