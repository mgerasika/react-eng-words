/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DeliveryTypeEnum,PickupLocationTypeEnum,TableServiceCatagoryEnum,OrderStateEnum,PaymentAccountTypeEnum,PaymentStatusEnum,CurrencyEnum,AppTypeEnum} from './enum';

export interface OrderSummaryModel{ 
	OrderId?:integer
	DeliveryType?:DeliveryTypeEnum
	PickupLocationType?:PickupLocationTypeEnum
	TableServiceCatagory?:TableServiceCatagoryEnum
	OrderState?:OrderStateEnum
	RequestedForTime?:string
	StoreName?:string
	StoreIanaTimeZone?:string
	CustomerName?:string
	CustomerPhoneNumber?:string
	Amount?:number
	RefundedAmount?:number
	PaymentAccountType?:PaymentAccountTypeEnum
	PaymentStatus?:PaymentStatusEnum
	Currency?:CurrencyEnum
	AppType?:AppTypeEnum
	LocalOrderId?:string
	DropOffLocationId?:integer
	DropOffLocation?:string
	AcceptedFor?:string
	InFraudZone?:boolean
	UnusualHighValueOrder?:boolean
}