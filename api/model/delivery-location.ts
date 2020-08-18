/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {CoordinatesModel} from './model';

export interface DeliveryLocationModel{ 
	Coordinates?:CoordinatesModel
	Building?:string
	Street?:string
	Town?:string
	PostCode?:string
	DeliveryInstructions?:string
	PrettyAddressString?:string
}