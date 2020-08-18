/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {StuartSettingsModel} from './model';

class StuartApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public stuart_PostStuartSettings(storeId:integer,stuartSettings:StuartSettingsModel):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,stuartSettings);
	}
	public stuart_CancelJob(jobId:integer,storeId:integer):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const stuartApi = new StuartApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
