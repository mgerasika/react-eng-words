/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultStoreOrderCapacityConfigModel,StoreOrderCapacityConfigEditModelModel} from './model';
import {DeliveryTypeEnum} from './enum';

class StoreOrderCapacityApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getStoreOrderCapacity(appId:string,storeId:integer,deliveryType:DeliveryTypeEnum):AxiosPromise<RestApiResultStoreOrderCapacityConfigModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public updateStoreOrderCapacityConfig(storeId:integer,deliveryType:DeliveryTypeEnum,newOrderCapacityConfig:StoreOrderCapacityConfigEditModelModel,appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,newOrderCapacityConfig);
	}
}
export const storeOrderCapacityApi = new StoreOrderCapacityApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
