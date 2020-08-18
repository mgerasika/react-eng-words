/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DayEnum} from './enum';

export interface StoreOrderCapacityPeriodModel{ 
	MaxOrderNumberPerStoreInterval?:integer
	DayOfTheWeek?:DayEnum
	PeriodStartHour?:integer
	PeriodStartMinutes?:integer
	PeriodEndHour?:integer
	PeriodEndMinutes?:integer
}