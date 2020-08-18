/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserTypeEnum,HydraDeviceStatusEnum} from './enum';
import {HydraStoreDataModel} from './model';

export interface HydraDeviceDetailsModel{ 
	HydraConfigId?:integer
	DeviceId?:string
	DeviceType?:UserTypeEnum
	Status?:HydraDeviceStatusEnum
	DeviceName?:string
	StoreNames?:HydraStoreDataModel[]
	LastPollUtc?:string
	Version?:string
	BuildNumber?:string
	GitSha?:string
	GitBranch?:string
}