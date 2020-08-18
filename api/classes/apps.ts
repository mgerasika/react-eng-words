/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultAppModel,RestApiArrayResultSupportedCountryModel,RestApiStringResultModel,RestApiResultDnsRecordInformationModel,RestApiPaginationResultAppModel,AppConfigUpdateModelModel} from './model';

class AppsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getApp(appId:string):AxiosPromise<RestApiResultAppModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getSupportedCountries():AxiosPromise<RestApiArrayResultSupportedCountryModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public setPanaceaVanityUrl(appId:string,vanityUrl:string):AxiosPromise<RestApiStringResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public getAppHostnameStatus(appId:string):AxiosPromise<RestApiResultDnsRecordInformationModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getApps(nameFilter:string,page:integer,limit:integer):AxiosPromise<RestApiPaginationResultAppModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public isPanaceaVanityUrlAvailable(vanityUrl:string,appId:string):AxiosPromise<RestApiStringResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public uploadAppLogo(appId:string,Image:file):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		const formData = new FormData();
		formData.append('Image',Image)
		return di.requestService.post(url);
	}
	public setAppConfig(appId:string,appConfigUpdate:AppConfigUpdateModelModel):AxiosPromise<RestApiResultAppModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,appConfigUpdate);
	}
	public setAppLanguages(appId:string,languages:Array):AxiosPromise<RestApiResultAppModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,languages);
	}
	public setAppHostname(appId:string,hostname:string,isEmbed:boolean):AxiosPromise<RestApiStringResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
}
export const appsApi = new AppsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
