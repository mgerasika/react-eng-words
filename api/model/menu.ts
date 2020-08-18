/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {MenuSectionBehaviourEnum,TaxTypeEnum} from './enum';
import {MenuSectionModel,MenuTaxRateModel} from './model';

export interface MenuModel{ 
	MenuId?:integer
	ModifiedTime?:string
	VersionNumber?:integer
	ImageUrl?:string
	Name?:string
	Locked?:boolean
	MenuSections?:MenuSectionModel[]
	TaxRates?:MenuTaxRateModel[]
	DisplaySectionLinks?:boolean
	MenuSectionBehaviour?:MenuSectionBehaviourEnum
	TaxType?:TaxTypeEnum
}