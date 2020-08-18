/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CurrencyEnum,BusinessTypeEnum} from './enum';

export interface BankAccountCreateModel{ 
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