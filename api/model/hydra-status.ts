/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserTypeEnum} from './enum';

export interface HydraStatusModel{ 
	AppId:string
	StoreIds?:array[]
	IsRegistered:boolean
	PinCode?:integer
	Images?:array[]
	UserType?:UserTypeEnum
}