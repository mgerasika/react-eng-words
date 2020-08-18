/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {PaymentAccountTypeEnum} from './enum';

export interface ProcessingFeeConfigModel{ 
	StoreId?:integer
	PaymentAccountType?:PaymentAccountTypeEnum
	PercentFee?:number
	FixedFee?:number
}