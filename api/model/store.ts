/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {PrintoutLayoutTypeEnum,CurrencyEnum} from './enum';
import {StoreAddressModel,DeliveryZoneModel,BusinessHoursPeriodModel,StoreNoteModel} from './model';

export interface StoreModel{ 
	StoreId?:integer
	StoreGroupId?:integer
	Address?:StoreAddressModel
	DeliveryZones?:DeliveryZoneModel[]
	ApmPhoneNumber?:string
	PickupHours?:BusinessHoursPeriodModel[]
	DeliveryHours?:BusinessHoursPeriodModel[]
	MenuId?:integer
	OrderConfirmationMessageOverrideDelivery?:string
	OrderConfirmationMessageOverridePickup?:string
	PrintoutLayoutType?:PrintoutLayoutTypeEnum
	StoreNotes?:StoreNoteModel[]
	MicrosoftTimeZone?:string
	IanaTimeZone?:string
	Currency?:CurrencyEnum
	PreOrderDeliveryEnabled?:boolean
	PreOrderPickupEnabled?:boolean
	LogoUrl?:string
	PhoneNumber?:string
	AlwaysAppearOpen?:boolean
	PreOrderEnabled?:boolean
	TakeOutEnabled?:boolean
	TableServiceEnabled?:boolean
	DineInEnabled?:boolean
	AllowPreOrdersAndTableService?:boolean
	PickupEnabled?:boolean
	DeliveryEnabled?:boolean
	CardOrderDeliveryEnabled?:boolean
	CashOrdersDeliveryEnabled?:boolean
	CardOrdersPickupEnabled?:boolean
	CashOrdersPickupEnabled?:boolean
	TipsEnabled?:boolean
	AutomaticallyAcceptOrders?:boolean
	OpenForDelivery?:boolean
	OpenForPickup?:boolean
	MinimumPickupOrderAmount?:number
	RequireCustomerNameForPickup?:boolean
	GdprCustomerPhoneNumbers?:boolean
	RequireCustomerNameForDelivery?:boolean
	AllowChefNotes?:boolean
	EtaInPickupConfirmationSmsEnabled?:boolean
	EtaInDeliveryConfirmationSmsEnabled?:boolean
	IsArchived?:boolean
	IsPublished?:boolean
	Name?:string
	EmailAddress?:string
	StaffLanguage?:string
}