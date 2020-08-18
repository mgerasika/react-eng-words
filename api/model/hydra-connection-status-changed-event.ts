/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {HydraDeviceStatusEnum} from './enum';

export interface HydraConnectionStatusChangedEventModel{ 
	DeviceId?:string
	HydraDeviceStatus?:HydraDeviceStatusEnum
	PollTime?:string
	EventName?:string
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}