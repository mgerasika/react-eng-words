/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiPaginationResultHttpRequestAndResponseLogModel} from './model';

class HttpRequestResponseLogsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getLogs(start:string,end:string,filterByUserId:integer,guid:string,page:integer,limit:integer,appId:string):AxiosPromise<RestApiPaginationResultHttpRequestAndResponseLogModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
}
export const httpRequestResponseLogsApi = new HttpRequestResponseLogsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
