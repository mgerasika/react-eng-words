/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {AccountStateEnum} from './enum';

export interface BankAccountModel{ 
	Id?:integer
	AccountName?:string
	Iban?:string
	Swift?:string
	AccountState?:AccountStateEnum
	StoreNames?:array[]
	BankAddress?:string
	BankCountryCode?:string
	AccountHolderAddress?:string
	AccountHolderCountryCode?:string
	VatNumber?:string
}