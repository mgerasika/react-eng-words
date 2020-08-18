/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {PackageTypeEnum,TransportTypeEnum} from './enum';

export interface StuartSettingsModel{ 
	ClientId?:string
	ClientSecret?:string
	Enabled?:boolean
	WebhookUrlBasicAuthentication?:string
	MinutesToPickupBeforeThanDeliveryTime?:integer
	PackageType?:PackageTypeEnum
	TransportType?:TransportTypeEnum
}