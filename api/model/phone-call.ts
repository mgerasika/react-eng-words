/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CallStatusEnum} from './enum';

export interface PhoneCallModel{ 
	PhoneCallId?:integer
	TimeOfCall?:string
	TimeOfCallLocal?:string
	StoreId?:integer
	StoreName?:string
	CallerName?:string
	CallerUserId?:integer
	CallerNumber?:string
	CallLengthInSeconds?:integer
	CallStatus?:CallStatusEnum
}