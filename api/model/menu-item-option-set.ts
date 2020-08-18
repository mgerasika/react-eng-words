/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CellLayoutTypeEnum} from './enum';
import {MenuItemOptionSetItemModel} from './model';

export interface MenuItemOptionSetModel{ 
	MenuItemOptionSetId?:integer
	ImageUrl?:string
	MenuItemOptionSetItems?:MenuItemOptionSetItemModel[]
	PublicId?:string
	Name?:string
	IsMasterOptionSet?:boolean
	DisplayOrder?:integer
	MinSelectCount?:integer
	MaxSelectCount?:integer
	CellLayoutType?:CellLayoutTypeEnum
}