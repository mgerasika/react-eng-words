/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {JobDeliveryDetailModel,JobEtaModel,JobCancellationModel,JobProofModel} from './model';

export interface JobDeliveryModel{ 
	Id?:integer
	Status?:string
	PickedAt?:string
	DeliveredAt?:string
	TrackingUrl?:string
	ClientReference?:string
	PackageDescription?:string
	PackageType?:string
	Pickup?:JobDeliveryDetailModel
	Dropoff?:JobDeliveryDetailModel
	Eta?:JobEtaModel
	Cancellation?:JobCancellationModel
	Proof?:JobProofModel
}