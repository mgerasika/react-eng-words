/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {HydraDeviceStatusEnum,VoucherTypeEnum,VoucherSubTypeEnum} from './enum';

export interface VoucherSummaryModel{ 
	VoucherId?:integer
	Code?:string
	Status?:HydraDeviceStatusEnum
	VoucherType?:VoucherTypeEnum
	VoucherSubType?:VoucherSubTypeEnum
	Description?:string
	IsEnabled?:boolean
}