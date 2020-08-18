/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CampaignStatisticsModel} from './model';

export interface RetentionCampaignModel{ 
	CampaignId?:integer
	From?:string
	Statistics?:CampaignStatisticsModel
	NotifyCustomerAfterMinutes?:integer
	PercentDiscountAmount?:integer
	LumpDiscountAmount?:number
	VoucherValidPeriodDays?:integer
	IncludeDeliveryFee?:boolean
	AutoApplyResultingVouchers?:boolean
	IncludeExistingOrders?:boolean
	IsEnabled?:boolean
	StoreIds?:array[]
}