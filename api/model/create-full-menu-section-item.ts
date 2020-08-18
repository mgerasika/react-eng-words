/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {SpicinessRatingEnum,CellLayoutTypeEnum} from './enum';
import {CreateFullMenuItemOptionSetModel,CreateMetadataModel} from './model';

export interface CreateFullMenuSectionItemModel{ 
	MenuItemOptionSets?:CreateFullMenuItemOptionSetModel[]
	Metadata?:CreateMetadataModel[]
	TaxRateName?:string
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