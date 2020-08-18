/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {UserEventInfoModel,RetentionCampaignModel} from './model';

export interface RetentionCampaignDeletedEventModel{ 
	EventName?:string
	Description?:string
	StoreId?:integer
	User?:UserEventInfoModel
	RetentionCampaign?:RetentionCampaignModel
	FlipdishEventId?:string
	CreateTime?:string
	Position?:integer
	AppId?:string
}