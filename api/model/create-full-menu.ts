/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {MenuSectionBehaviourEnum,TaxTypeEnum} from './enum';
import {CreateFullMenuSectionModel,CreateMenuTaxRateModel} from './model';

export interface CreateFullMenuModel{ 
	Name?:string
	ImageUrl?:string
	MenuSections?:CreateFullMenuSectionModel[]
	TaxRates?:CreateMenuTaxRateModel[]
	DisplaySectionLinks?:boolean
	MenuSectionBehaviour?:MenuSectionBehaviourEnum
	TaxType?:TaxTypeEnum
}