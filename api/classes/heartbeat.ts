/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiStringResultModel} from './model';

class HeartbeatApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public headPing():AxiosPromise<RestApiStringResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.head(url);
	}
	public headHostname():AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.head(url);
	}
}
export const heartbeatApi = new HeartbeatApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
