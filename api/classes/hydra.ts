/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultHydraConfigModel,RestApiResultHydraStatusModel,RestApiResultPaymentTerminalDetailsModel,RestApiResultPaymentTerminalTransactionDetailsModel,RestApiPaginationResultHydraDeviceDetailsModel,EmvTerminalModel,HydraRegistrationRequestModel} from './model';
import {UserTypeEnum} from './enum';

class HydraApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getSettings():AxiosPromise<RestApiResultHydraConfigModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getRegistration():AxiosPromise<RestApiResultHydraStatusModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public hydra_CreateEmv(appId:string,emv:EmvTerminalModel):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,emv);
	}
	public getEMVTerminalDetails(appId:string):AxiosPromise<RestApiResultPaymentTerminalDetailsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getEmvOrderState(orderId:integer,appId:string):AxiosPromise<RestApiResultPaymentTerminalTransactionDetailsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getAttachedDevices(appId:string,deviceType:UserTypeEnum,pageIndex:integer,pageSize:integer,storeId:integer,deviceName:string,deviceSerial:string):AxiosPromise<RestApiPaginationResultHydraDeviceDetailsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public register(appId:string,hydraRegistration:HydraRegistrationRequestModel):AxiosPromise<RestApiResultHydraStatusModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,hydraRegistration);
	}
	public cancelEmvPayment(orderId:integer,appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public unassignEmv(appId:string,hydraConfigId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public assignEmv(appId:string,hydraConfigId:integer,emvTerminalId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public loginWithDeviceId(deviceId:string,hydraUserType:UserTypeEnum,serialNumber:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public hydra_DeleteEmv(appId:string,id:integer):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public unAssign(appId:string,deviceId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const hydraApi = new HydraApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
