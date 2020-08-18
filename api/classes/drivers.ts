/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiArrayResultDriverStoreModel,RestApiStringResultModel,UpdateDriverProfileModelModel,DriverRequestLoginPinModelModel,DriverLoginModelModel,UpdateDriverNotificationTokenModel} from './model';
import {PresenceEnum,DeliveryTrackingStatusEnum} from './enum';

class DriversApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public updateDriverProfile(updateDriverProfile:UpdateDriverProfileModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,updateDriverProfile);
	}
	public getStoresForDriver():AxiosPromise<RestApiArrayResultDriverStoreModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public driverRequestLoginCodeSms(driverRequestLoginPinModel:DriverRequestLoginPinModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,driverRequestLoginPinModel);
	}
	public driverLogin(driverLoginModel:DriverLoginModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,driverLoginModel);
	}
	public removeDriverNotificationToken(removeDriverToken:UpdateDriverNotificationTokenModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url ,removeDriverToken);
	}
	public deleteDriverProfileImage():AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public setDriverPresenceForStore(storeId:integer,presence:PresenceEnum):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public updateDeliveryTrackingStatus(orderId:integer,deliveryTrackingStatus:DeliveryTrackingStatusEnum):AxiosPromise<RestApiStringResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
}
export const driversApi = new DriversApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
