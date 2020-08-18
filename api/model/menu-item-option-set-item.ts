/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CellLayoutTypeEnum} from './enum';
import {CreateMetadataModel} from './model';

export interface MenuItemOptionSetItemModel{ 
	MenuItemOptionSetItemId?:integer
	PublicId?:string
	Metadata?:CreateMetadataModel[]
	Name?:string
	Price?:number
	IsAvailable?:boolean
	DisplayOrder?:integer
	CellLayoutType?:CellLayoutTypeEnum
	ImageUrl?:string
}