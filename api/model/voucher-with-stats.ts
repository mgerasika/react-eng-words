/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {HydraDeviceStatusEnum,VoucherTypeEnum,VoucherSubTypeEnum,CurrencyEnum} from './enum';
import {AddItemDetailsModel,CreditNoteDetailsModel,LumpDiscountDetailsModel,PercentDiscountDetailsModel} from './model';

export interface VoucherWithStatsModel{ 
	TotalUsed?:integer
	TotalCustomers?:integer
	TotalAmountFromOrders?:number
	TotalDiscounted?:number
	AverageOrderSize?:number
	VoucherId?:integer
	Status?:HydraDeviceStatusEnum
	VoucherType?:VoucherTypeEnum
	VoucherSubType?:VoucherSubTypeEnum
	Currency?:CurrencyEnum
	Stores?:array[]
	StoreNames?:array[]
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