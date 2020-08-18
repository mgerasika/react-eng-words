/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiStringArrayResultModel,RestApiStringResultModel} from './model';

class UsersApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getRoles():AxiosPromise<RestApiStringArrayResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getPreviousOrderCountForStore(userId:integer,storeId:integer):AxiosPromise<RestApiStringResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
}
export const usersApi = new UsersApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
