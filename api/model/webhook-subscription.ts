/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */

export interface WebhookSubscriptionModel{ 
	Id?:integer
	OwnerUserId?:integer
	Version?:string
	EventNames?:array[]
	CallbackUrl?:string
	Enabled?:boolean
	VerifyToken?:string
}