/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiArrayResultHomeActionModel,RestApiResultHomeStatisticsModel} from './model';

class HomeApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getHomeActions(appId:string):AxiosPromise<RestApiArrayResultHomeActionModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getHomeStatistics(appId:string):AxiosPromise<RestApiResultHomeStatisticsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public dismissOldPortalAction():AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public completeHomeAction(appId:string,homeActionId:integer,isDismissed:boolean):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
}
export const homeApi = new HomeApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
