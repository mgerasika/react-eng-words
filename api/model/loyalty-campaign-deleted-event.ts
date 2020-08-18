/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,LoyaltyCampaignModel} from './model';

export interface LoyaltyCampaignDeletedEventModel{ 
	EventName?:string
	Description?:string
	StoreId?:integer
	User?:UserEventInfoModel
	LoyaltyCampaign?:LoyaltyCampaignModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}