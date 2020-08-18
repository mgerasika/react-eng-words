/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DeliveryTypeEnum} from './enum';
import {StoreOrderCapacityPeriodModel} from './model';

export interface StoreOrderCapacityConfigModel{ 
	StoreId?:integer
	DeliveryType?:DeliveryTypeEnum
	StoreIntervalInMinutes?:integer
	OrderCapacityPeriods?:StoreOrderCapacityPeriodModel[]
}