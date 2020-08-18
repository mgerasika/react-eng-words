/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultStoreGroupModel,RestApiPaginationResultStoreGroupExtendedModel,StoreGroupBaseModel} from './model';

class StoreGroupsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public removeStoreGroup(storeGroupId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public createStoreGroup(appNameId:string,storeGroup:StoreGroupBaseModel):AxiosPromise<RestApiResultStoreGroupModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,storeGroup);
	}
	public getStoreGroupsExtended(appNameId:string,searchQuery:string,page:integer,limit:integer,groupingRadius:integer):AxiosPromise<RestApiPaginationResultStoreGroupExtendedModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
}
export const storeGroupsApi = new StoreGroupsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
