/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DriverStoreModel} from './model';

export interface DriverModel{ 
	UserId?:integer
	UserName?:string
	UserPhoneNumber?:string
	Stores?:DriverStoreModel[]
	ProfileImageUrl?:string
	DriverKey?:string
}