/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CardPaymentsStatusEnum,AccountStatusEnum} from './enum';

export interface StripeConnectedAccountModel{ 
	FlipdishConnectedAccountId?:integer
	StripeId?:string
	WhitelabelConfigId?:integer
	CardPaymentsStatus?:CardPaymentsStatusEnum
	TransfersStatus?:CardPaymentsStatusEnum
	AccountStatus?:AccountStatusEnum
}