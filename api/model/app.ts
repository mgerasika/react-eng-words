/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {AppAccessLevelEnum,ApplicationCategoryEnum} from './enum';
import {LanguageModel,CoordinatesModel} from './model';

export interface AppModel{ 
	AppId?:string
	HasIosApp?:boolean
	HasAndroidApp?:boolean
	CountryId?:string
	LogoImageUrl?:string
	Languages?:LanguageModel[]
	AvailableAppLanguages?:LanguageModel[]
	AppAccessLevel?:AppAccessLevelEnum
	AppResourceSet?:array[]
	Features?:array[]
	MapCenter?:CoordinatesModel
	MapNorthEast?:CoordinatesModel
	MapSouthWest?:CoordinatesModel
	Name?:string
	HostName?:string
	MainColor?:string
	ApplicationCategory?:ApplicationCategoryEnum
	IsPanaceaEnabled?:boolean
	CookieConsentPromptEnabled?:boolean
}