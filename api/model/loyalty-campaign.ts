/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CampaignStatisticsModel} from './model';

export interface LoyaltyCampaignModel{ 
	CampaignId?:integer
	From?:string
	Statistics?:CampaignStatisticsModel
	OrdersBeforeReceivingVoucher?:integer
	PercentDiscountAmount?:integer
	VoucherValidPeriodDays?:integer
	IncludeDeliveryFee?:boolean
	AutoApplyResultingVouchers?:boolean
	IncludeExistingOrders?:boolean
	IsEnabled?:boolean
	StoreIds?:array[]
}