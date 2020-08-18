/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CustomerDeliveryTrackingOrderModel} from './model';

export interface OrderCustomerTrackingCreatedEventModel{ 
	EventName?:string
	Description?:string
	Order?:CustomerDeliveryTrackingOrderModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}