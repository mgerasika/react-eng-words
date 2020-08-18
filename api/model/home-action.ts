/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {HomeActionTypeEnum} from './enum';

export interface HomeActionModel{ 
	HomeActionId?:integer
	HomeActionType?:HomeActionTypeEnum
	Order?:integer
	TitleKey?:string
	ActionKey?:string
	DescriptionKey?:string
	Action?:string
	Dismissible?:boolean
}