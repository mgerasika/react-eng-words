/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {AccountStateEnum,BusinessTypeEnum} from './enum';
import {StripeConnectedAccountInfoModel} from './model';

export interface BankAccountSummaryModel{ 
	Id?:integer
	StoreNames?:array[]
	AccountState?:AccountStateEnum
	CurrencyCode?:string
	StripeConnectedAccountInfo?:StripeConnectedAccountInfoModel
	AccountName?:string
	Iban?:string
	Swift?:string
	NationalClearingCode?:string
	RejectionReason?:string
	BusinessType?:BusinessTypeEnum
}