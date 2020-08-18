/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiPaginationResultOAuthTokenModelModel} from './model';

class AuthorizationTokensApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getAuthorizationTokens(oauthAppId:string,page:integer,limit:integer,appId:string):AxiosPromise<RestApiPaginationResultOAuthTokenModelModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public revokeToken(key:string,appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const authorizationTokensApi = new AuthorizationTokensApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
