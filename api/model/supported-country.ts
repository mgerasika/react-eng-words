/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {AddressLayoutEnum,PostCodeTypeEnum,SupportRegionEnum} from './enum';

export interface SupportedCountryModel{ 
	CountryCode?:string
	Name?:string
	PhoneCode?:integer
	LanguageCode?:string
	LanguageName?:string
	OtpNumber?:string
	SupportNumber?:string
	AddressLayout?:AddressLayoutEnum
	PostCodeType?:PostCodeTypeEnum
	SupportRegion?:SupportRegionEnum
}