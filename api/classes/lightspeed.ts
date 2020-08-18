/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultLightspeedSettingsModel,LightspeedSettingsModel} from './model';

class LightspeedApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public lightspeed_SaveStoreSettings(storeId:integer,lightspeedSettings:LightspeedSettingsModel):AxiosPromise<RestApiResultLightspeedSettingsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,lightspeedSettings);
	}
	public lightspeed_GenerateMenu(storeId:integer):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
}
export const lightspeedApi = new LightspeedApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
