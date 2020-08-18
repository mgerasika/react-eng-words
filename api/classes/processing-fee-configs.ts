/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiArrayResultProcessingFeeConfigModel} from './model';

class ProcessingFeeConfigsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getProcessingFeeConfigsByStoreIds(storeIds:array):AxiosPromise<RestApiArrayResultProcessingFeeConfigModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
}
export const processingFeeConfigsApi = new ProcessingFeeConfigsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
