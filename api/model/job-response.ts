/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {JobDeliveryModel,JobPricingModel,JobDriverModel} from './model';

export interface JobResponseModel{ 
	Id?:integer
	CreatedAt?:string
	Status?:string
	PackageType?:string
	TransportType?:string
	AssignmentCode?:string
	PickupAt?:string
	DropoffAt?:string
	Comment?:string
	Distance?:number
	Duration?:integer
	Deliveries?:JobDeliveryModel[]
	Pricing?:JobPricingModel
	Driver?:JobDriverModel
}