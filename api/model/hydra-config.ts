/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DeviceSettingsModel} from './model';

export interface HydraConfigModel{ 
	MinimumVersion:string
	PaymentOptions:array[]
	DeviceSettings:DeviceSettingsModel
	Version?:string
	BuildNumber?:string
	GitSha?:string
	GitBranch?:string
}