/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {AccountStateEnum,CurrencyEnum,BusinessTypeEnum} from './enum';
import {StripeConnectedAccountInfoModel} from './model';

export interface BankAccountDetailModel{ 
	Id?:integer
	StoreNames?:array[]
	AccountState?:AccountStateEnum
	StripeConnectedAccountInfo?:StripeConnectedAccountInfoModel
	BankAddress?:string
	BankCountryCode?:string
	AccountHolderAddress?:string
	AccountHolderCountryCode?:string
	VatNumber?:string
	CurrencyCode?:CurrencyEnum
	StoreIds?:array[]
	BankName?:string
	AccountName?:string
	Iban?:string
	Swift?:string
	NationalClearingCode?:string
	RejectionReason?:string
	BusinessType?:BusinessTypeEnum
}