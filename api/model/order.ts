/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DeliveryTypeEnum,PickupLocationTypeEnum,TableServiceCatagoryEnum,PaymentAccountTypeEnum,OrderStateEnum,AppTypeEnum,PaymentStatusEnum,RejectionReasonEnum,DeliveryTrackingStatusEnum} from './enum';
import {StoreSummaryModel,CustomerSummaryModel,OrderVoucherSummaryModel,FeeSummaryModel,OrderItemModel,DeliveryLocationModel,CoordinatesModel,MaskedPhoneNumberModel} from './model';

export interface OrderModel{ 
	Store?:StoreSummaryModel
	Customer?:CustomerSummaryModel
	Voucher?:OrderVoucherSummaryModel
	Fees?:FeeSummaryModel
	OrderItems?:OrderItemModel[]
	DeliveryLocation?:DeliveryLocationModel
	CustomerLocation?:CoordinatesModel
	MaskedPhoneNumber?:MaskedPhoneNumberModel
	DropOffLocationId?:integer
	DropOffLocation?:string
	AcceptedFor?:string
	InFraudZone?:boolean
	UnusualHighValueOrder?:boolean
	RejectedByUserId?:integer
	OrderId?:integer
	LocalOrderId?:string
	DeliveryType?:DeliveryTypeEnum
	PickupLocationType?:PickupLocationTypeEnum
	TableServiceCatagory?:TableServiceCatagoryEnum
	TipAmount?:number
	DeliveryAmount?:number
	OrderItemsAmount?:number
	Amount?:number
	ProcessingFee?:number
	PaymentAccountType?:PaymentAccountTypeEnum
	PaymentAccountDescription?:string
	OrderState?:OrderStateEnum
	IsPreOrder?:boolean
	PlacedTime?:string
	RequestedForTime?:string
	ChefNote?:string
	AppType?:AppTypeEnum
	UserRating?:integer
	PaymentStatus?:PaymentStatusEnum
	RejectionReason?:RejectionReasonEnum
	RefundedAmount?:number
	DeliveryTrackingStatus?:DeliveryTrackingStatusEnum
	DriverId?:integer
	TotalTax?:number
	OrderTrackingCode?:string
}