/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CurrencyEnum} from './enum';
import {CustomerDeliveryTrackingOrderLineModel} from './model';

export interface CustomerDeliveryTrackingOrderModel{ 
	OrderId?:integer
	Address?:string
	DeliveryNotes?:string
	StorePhoneNumber?:string
	AppIconUrl?:string
	OrderTrackingCode?:string
	PaymentMethodDescription?:string
	LastFourDigits?:string
	OrderLines?:CustomerDeliveryTrackingOrderLineModel[]
	TotalAmount?:number
	Currency?:CurrencyEnum
	Latitude?:number
	Longitude?:number
	Placed?:string
	RequestedFor?:string
	DriverId?:integer
	DriverName?:string
	DriverImage?:string
	EstimatedMinutesForDelivery?:integer
}