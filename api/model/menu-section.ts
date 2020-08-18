/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {MenuSectionItemModel,MenuSectionAvailabilityModel} from './model';

export interface MenuSectionModel{ 
	MenuSectionId?:integer
	MenuItems?:MenuSectionItemModel[]
	MenuSectionAvailability?:MenuSectionAvailabilityModel
	PublicId?:string
	Name?:string
	Description?:string
	DisplayOrder?:integer
	IsAvailable?:boolean
	IsHiddenFromCustomers?:boolean
	ImageUrl?:string
}