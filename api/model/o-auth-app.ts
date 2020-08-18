/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {FlowEnum,RefreshTokenUsageEnum} from './enum';

export interface OAuthAppModel{ 
	OauthAppId?:string
	OauthAppName?:string
	OwnerUserId?:integer
	LogoUri?:string
	Flow?:FlowEnum
	RefreshTokenUsage?:RefreshTokenUsageEnum
	AccessTokenLifetime?:integer
	AbsoluteRefreshTokenLifetime?:integer
}