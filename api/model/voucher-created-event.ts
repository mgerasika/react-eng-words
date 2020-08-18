/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,VoucherModel} from './model';

export interface VoucherCreatedEventModel{ 
	VoucherId?:integer
	EventName?:string
	User?:UserEventInfoModel
	Description?:string
	Voucher?:VoucherModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}