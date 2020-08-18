/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {TaxTypeEnum} from './enum';
import {MenuTaxRateModel} from './model';

export interface MenuTaxDetailsModel{ 
	TaxRates?:MenuTaxRateModel[]
	DisplayTax?:boolean
	TaxType?:TaxTypeEnum
	ItemTaxes?:number
	SetItemTaxes?:number
}