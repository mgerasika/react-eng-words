/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CurrencyEnum} from './enum';

export interface StoreEndOfDayReportModel{ 
	StoreId?:integer
	StoreName?:string
	Currency?:CurrencyEnum
	OrderCount?:integer
	OrderValue?:number
	OrderValueExcludingDeliveryFees?:number
	CollectionOrderCount?:integer
	CollectionCashOrderCount?:integer
	CollectionPaidOnlineOrderCount?:integer
	CollectionOrderValue?:number
	CollectionCashOrderValue?:number
	CollectionPaidOnlineOrderValue?:number
	DeliveryOrderCount?:integer
	DeliveryCashOrderCount?:integer
	DeliveryPaidOnlineOrderCount?:integer
	DeliveryOrderValue?:number
	DeliveryCashOrderValue?:number
	DeliveryPaidOnlineOrderValue?:number
	PaidOnlineOrderCount?:integer
	CashOrderCount?:integer
	PaidOnlineOrderValue?:number
	CashOrderValue?:number
	PaidOnlineOrderValueExcludingDeliveryFees?:number
	CashOrderValueExcludingDeliveryFees?:number
	StartTime?:string
	EndTime?:string
}