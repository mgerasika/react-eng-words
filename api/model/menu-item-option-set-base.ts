/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CellLayoutTypeEnum} from './enum';

export interface MenuItemOptionSetBaseModel{ 
	Name?:string
	IsMasterOptionSet?:boolean
	DisplayOrder?:integer
	MinSelectCount?:integer
	MaxSelectCount?:integer
	CellLayoutType?:CellLayoutTypeEnum
}