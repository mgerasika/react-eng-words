/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DeliveryTypeEnum,TypeEnum} from './enum';

export interface BusinessHoursOverrideModel{ 
	BusinessHoursOverrideId?:integer
	DeliveryType?:DeliveryTypeEnum
	StartTime:string
	EndTime:string
	Type?:TypeEnum
}