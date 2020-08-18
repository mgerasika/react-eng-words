/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultApmStatisticsModel,RestApiArrayResultApmHourlyDataPointModel,RestApiPaginationResultPhoneCallModel,RestApiArrayResultApmDataPointModel,RestApiArrayResultApmCurrencyDataPointModel} from './model';
import {aggregateDataByEnum} from './enum';

class ApmApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getBasicStatistics(appId:string,storeId:array):AxiosPromise<RestApiResultApmStatisticsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getCalendarWeekStatistics(appId:string,storeId:array):AxiosPromise<RestApiArrayResultApmHourlyDataPointModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getPaginatedCallList(appId:string,page:integer,limit:integer,storeId:array):AxiosPromise<RestApiPaginationResultPhoneCallModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getCallsStatistics(appId:string,aggregateDataBy:aggregateDataByEnum,dataPointLimit:integer,storeId:array):AxiosPromise<RestApiArrayResultApmDataPointModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getOrderStatistics(appId:string,aggregateDataBy:aggregateDataByEnum,dataPointLimit:integer,storeId:array):AxiosPromise<RestApiArrayResultApmCurrencyDataPointModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
}
export const apmApi = new ApmApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
