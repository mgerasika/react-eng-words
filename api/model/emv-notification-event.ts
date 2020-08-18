/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {OrderModel} from './model';

export interface EmvNotificationEventModel{ 
	EventName?:string
	Notification?:string
	Order?:OrderModel
	TerminalId?:string
	Description?:string
	ExpDate?:string
	CardType?:string
	PaymentMethod?:string
	AccountNumber?:string
	AuthCode?:string
	ProviderMessage?:string
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}