/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {AppAccessLevelEnum} from './enum';

export interface CreateTeammateModel{ 
	Email?:string
	AppAccessLevel?:AppAccessLevelEnum
	HasAccessToAllStores?:boolean
	StoreIds?:array[]
}