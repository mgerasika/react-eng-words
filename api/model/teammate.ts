/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {InvitationStatusEnum,AppAccessLevelEnum} from './enum';

export interface TeammateModel{ 
	TeammateId?:string
	Name?:string
	LastActivity?:string
	AppId?:string
	InvitationStatus?:InvitationStatusEnum
	Email?:string
	AppAccessLevel?:AppAccessLevelEnum
	HasAccessToAllStores?:boolean
	StoreIds?:array[]
}