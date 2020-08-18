/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {JobAddressModel,JobContactModel} from './model';

export interface JobDeliveryDetailModel{ 
	Id?:integer
	Latitude?:number
	Longitude?:number
	Comment?:string
	Address?:JobAddressModel
	Contact?:JobContactModel
}