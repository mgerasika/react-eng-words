/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultDeliveryZoneModel,DeliveryZoneBaseModel} from './model';

class DeliveryZoneApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public addDeliveryZone(storeId:integer,deliveryZoneBase:DeliveryZoneBaseModel):AxiosPromise<RestApiResultDeliveryZoneModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,deliveryZoneBase);
	}
	public removeDeliveryZone(storeId:integer,deliveryZoneId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const deliveryZoneApi = new DeliveryZoneApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
