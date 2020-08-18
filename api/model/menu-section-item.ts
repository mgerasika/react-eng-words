/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {SpicinessRatingEnum,CellLayoutTypeEnum} from './enum';
import {MenuItemOptionSetModel,BusinessHoursPeriodModel,CreateMetadataModel} from './model';

export interface MenuSectionItemModel{ 
	MenuItemId?:integer
	ActualPrice?:number
	MenuItemOptionSets?:MenuItemOptionSetModel[]
	DailySpecialHours?:BusinessHoursPeriodModel[]
	PublicId?:string
	Metadata?:CreateMetadataModel[]
	Name?:string
	Description?:string
	SpicinessRating?:SpicinessRatingEnum
	Price?:number
	DisplayOrder?:integer
	Alcohol?:boolean
	IsAvailable?:boolean
	CellLayoutType?:CellLayoutTypeEnum
	DisableVouchers?:boolean
	ImageUrl?:string
}