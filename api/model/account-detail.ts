/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {SignupStepModel} from './model';

export interface AccountDetailModel{ 
	Email?:string
	SignupSteps?:SignupStepModel[]
	IsVerified?:boolean
	IsSelfServeUser?:boolean
	AccountId?:integer
	Name?:string
	Language?:string
	TimeZoneInfoId?:string
	DisplayTimesInUserLocalTimeZone?:boolean
	ShowHiddenFeatures?:boolean
}