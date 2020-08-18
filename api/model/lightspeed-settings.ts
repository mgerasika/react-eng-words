/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {PriceTypeEnum} from './enum';

export interface LightspeedSettingsModel{ 
	CompanyId?:string
	Enabled?:boolean
	EstimatedMinutesForDelivery?:integer
	EstimatedMinutesForCollection?:integer
	GeographicLocation?:string
	Establishment?:boolean
	VoucherId?:string
	DeliveryFeeId?:string
	ProcessingFeeId?:string
	PriceType?:PriceTypeEnum
	MenuId?:integer
	CollectionTableId?:integer
	DeliveryTableId?:integer
	CollectionTableIds?:string
	DeliveryTableIds?:string
	UseTaxInclusivePrices?:boolean
}