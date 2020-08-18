/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiStringResultModel,RestApiResultOauthClientRedirectUriModel,OAuthAppModel} from './model';

class OAuthClientsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public oAuthClients_GetApplications(appId:string):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public deleteOAuthApp(oauthAppId:string,appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public getOAuthClientSecret(oauthAppId:string,appId:string):AxiosPromise<RestApiStringResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getOauthAccessToken(oauthAppId:string,appId:string):AxiosPromise<RestApiStringResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public addRedirectUri(oauthAppId:string,uri:string,appId:string):AxiosPromise<RestApiResultOauthClientRedirectUriModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,uri);
	}
	public createOAuthApp(oAuthApp:OAuthAppModel,appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,oAuthApp);
	}
	public removeRedirectUri(oauthAppId:string,uriId:integer,appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const oAuthClientsApi = new OAuthClientsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
