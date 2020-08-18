/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {PreOrderTimeDisplayTypeEnum} from './enum';

export interface PreOrderConfigModel{ 
	LeadTimeMinutes?:integer
	IntervalMinutes?:integer
	MaxOrderAheadDays?:integer
	IncludeAsap?:boolean
	IncludeMoreGranularInitialTime?:boolean
	CutOffTimePreviousDayBasic?:string
	CutOffTimeCurrentDayBasic?:string
	PreOrderTimeDisplayType?:PreOrderTimeDisplayTypeEnum
	AlwaysAppearOpen?:boolean
	RequireExplicitSelectAlways?:boolean
}