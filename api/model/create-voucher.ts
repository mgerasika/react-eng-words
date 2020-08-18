/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {VoucherTypeEnum} from './enum';
import {AddItemDetailsModel,CreditNoteDetailsModel,LumpDiscountDetailsModel,PercentDiscountDetailsModel} from './model';

export interface CreateVoucherModel{ 
	VoucherType?:VoucherTypeEnum
	Stores?:array[]
	AddItemDetails?:AddItemDetailsModel
	CreditNoteDetails?:CreditNoteDetailsModel
	LumpDiscountDetails?:LumpDiscountDetailsModel
	PercentDiscountDetails?:PercentDiscountDetailsModel
	Code?:string
	Description?:string
	ValidOnOrdersOver?:number
	TakesPriority?:boolean
	IsEnabled?:boolean
	IsAutomaticallyApplied?:boolean
	IncludeDeliveryFee?:boolean
	IsValidForDeliveryOrders?:boolean
	IsValidForPickupOrders?:boolean
	IsValidForOrdersPayedOnline?:boolean
	IsValidForOrdersPayedByCash?:boolean
	IsValidForFirstOrderOnly?:boolean
	IsValidOncePerCustomer?:boolean
	IsValidOnlyOnce?:boolean
	StartDate?:string
	ExpiryDate?:string
}