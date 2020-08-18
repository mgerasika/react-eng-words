/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultDriverModel,DriverInvitationModel} from './model';

class DeliveryTrackingApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public inviteDriverToApp(appId:string,driverInvitation:DriverInvitationModel):AxiosPromise<RestApiResultDriverModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,driverInvitation);
	}
	public assignDriverToOrders(appId:string,driverId:integer,orderIdAndSequenceNumbers:Array):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,orderIdAndSequenceNumbers);
	}
	public assignDriverToOrder(appId:string,orderId:integer,driverId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public removeDriverFromApp(appId:string,driverId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public unassignDriverFromOrder(appId:string,orderId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const deliveryTrackingApi = new DeliveryTrackingApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
