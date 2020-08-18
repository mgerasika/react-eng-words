/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {OrderItemOptionModel} from './model';

export interface OrderItemModel{ 
	OrderItemOptions?:OrderItemOptionModel[]
	Metadata?:string
	MenuItemPublicId?:string
	MenuSectionName?:string
	MenuSectionDisplayOrder?:integer
	Name?:string
	Description?:string
	Price?:number
	PriceIncludingOptionSetItems?:number
	MenuItemId?:integer
	MenuItemDisplayOrder?:integer
	IsAvailable?:boolean
}