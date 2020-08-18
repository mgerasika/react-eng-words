/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {DayEnum} from './enum';
import {RangeModel} from './model';

export interface BusinessHoursPeriodModel{ 
	Early?:RangeModel
	Late?:RangeModel
	Ranges?:RangeModel[]
	DayOfWeek?:DayEnum
	StartTime?:string
	Period?:string
	StartTimeEarly?:string
	PeriodEarly?:string
}