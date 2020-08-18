/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */

export interface VoucherBaseModel{ 
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