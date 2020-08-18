/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,PrinterModel} from './model';

export interface PrinterUnassignedFromStoreEventModel{ 
	EventName?:string
	Description?:string
	StoreId?:integer
	StoreGroupId?:integer
	User?:UserEventInfoModel
	Printer?:PrinterModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}