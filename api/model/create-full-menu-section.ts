/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {MenuSectionAvailabilityModel,CreateFullMenuSectionItemModel} from './model';

export interface CreateFullMenuSectionModel{ 
	MenuSectionAvailability?:MenuSectionAvailabilityModel
	MenuItems?:CreateFullMenuSectionItemModel[]
	Name?:string
	Description?:string
	DisplayOrder?:integer
	IsAvailable?:boolean
	IsHiddenFromCustomers?:boolean
	ImageUrl?:string
}