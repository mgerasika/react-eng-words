/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultStoreModel,RestApiResultAssignedBankAccountModel,RestApiResultStoreEndOfDayReportModel,RestApiResultBusinessHoursPeriodModel,RestApiArrayResultRestApiDefaultResponseModel,RestApiArrayResultPreOrderTimeModel,RestApiArrayResultProcessingFeeConfigModel,RestApiPaginationResultStoreModel,RestApiArrayResultStoreStatisticsModel,RestApiResultBusinessHoursOverrideModel,RestApiPaginationResultStoreHeaderModel,RestApiResultProcessingFeeConfigModel,RestApiResultStoreAddressModel,RestApiResultCoordinatesModel,StoreBaseModel,BusinessHoursPeriodBaseModel,PreOrderConfigModel,BusinessHoursOverrideBaseModel,StoreCreateBaseModel,StoreCloneSettingsModel,StoreAddressBaseModel,CoordinatesModel} from './model';
import {DeliveryTypeEnum,PreOrderTimeDisplayTypeEnum,PaymentAccountTypeEnum} from './enum';

class StoresApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public updateStore(storeId:integer,store:StoreBaseModel):AxiosPromise<RestApiResultStoreModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,store);
	}
	public getBankAccountForStore(storeId:integer):AxiosPromise<RestApiResultAssignedBankAccountModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getEndOfDayReport(storeId:integer,date:string):AxiosPromise<RestApiResultStoreEndOfDayReportModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public setBusinessHours(storeId:integer,deliveryType:DeliveryTypeEnum,businessHoursPeriod:BusinessHoursPeriodBaseModel):AxiosPromise<RestApiResultBusinessHoursPeriodModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,businessHoursPeriod);
	}
	public updatePreOrderConfig(storeId:integer,deliveryType:DeliveryTypeEnum,preOrderConfig:PreOrderConfigModel):AxiosPromise<RestApiArrayResultRestApiDefaultResponseModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,preOrderConfig);
	}
	public getPreOrderPreview(storeId:integer,deliveryType:DeliveryTypeEnum,preOrderConfig.leadTimeMinutes:integer,preOrderConfig.intervalMinutes:integer,preOrderConfig.maxOrderAheadDays:integer,preOrderConfig.includeAsap:boolean,preOrderConfig.includeMoreGranularInitialTime:boolean,preOrderConfig.cutOffTimePreviousDayBasic:string,preOrderConfig.cutOffTimeCurrentDayBasic:string,preOrderConfig.preOrderTimeDisplayType:PreOrderTimeDisplayTypeEnum,preOrderConfig.alwaysAppearOpen:boolean,preOrderConfig.requireExplicitSelectAlways:boolean):AxiosPromise<RestApiArrayResultPreOrderTimeModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getProcessingFeeConfigsByStoreId(storeId:integer,appNameId:string):AxiosPromise<RestApiArrayResultProcessingFeeConfigModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getStoresByAppId(appId:string,searchQuery:string,page:integer,limit:integer):AxiosPromise<RestApiPaginationResultStoreModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getStoreNetSales(appId:string,storeId:array):AxiosPromise<RestApiArrayResultStoreStatisticsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public createBusinessHoursOverrideByStoreId(storeId:integer,businessHoursOverride:BusinessHoursOverrideBaseModel):AxiosPromise<RestApiResultBusinessHoursOverrideModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,businessHoursOverride);
	}
	public getStoreHeadersByAppId(appId:string,storeNameQuery:string,page:integer,limit:integer):AxiosPromise<RestApiPaginationResultStoreHeaderModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getProcessingFeeConfigsByStoreIdAndPaymentAccountType(storeId:integer,paymentAccountType:PaymentAccountTypeEnum,appNameId:string):AxiosPromise<RestApiResultProcessingFeeConfigModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public createStore(storeGroupId:integer,store:StoreCreateBaseModel):AxiosPromise<RestApiResultStoreModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,store);
	}
	public cloneStore(storeId:integer,settings:StoreCloneSettingsModel):AxiosPromise<RestApiResultStoreModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,settings);
	}
	public updateStoreAddress(storeId:integer,storeAddress:StoreAddressBaseModel):AxiosPromise<RestApiResultStoreAddressModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,storeAddress);
	}
	public archiveStore(storeId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public publishStore(storeId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public unpublishStore(storeId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public assignMenu(storeId:integer,menuId:integer):AxiosPromise<RestApiArrayResultRestApiDefaultResponseModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public updateStoreAddressCoordinates(storeId:integer,coordinates:CoordinatesModel,appNameId:string):AxiosPromise<RestApiResultCoordinatesModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,coordinates);
	}
	public setPreOrdeEnabled(storeId:integer,deliveryType:DeliveryTypeEnum,enabled:boolean):AxiosPromise<RestApiArrayResultRestApiDefaultResponseModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public deleteBusinessHoursOverride(storeId:integer,businessHoursOverrideId:integer):AxiosPromise<RestApiArrayResultRestApiDefaultResponseModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const storesApi = new StoresApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
