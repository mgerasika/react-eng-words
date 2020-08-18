/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultLoyaltyCampaignModel,RestApiResultRetentionCampaignModel,RestApiArrayResultLoyaltyCampaignModel,RestApiArrayResultRetentionCampaignModel,LoyaltyCampaignBaseModel,RetentionCampaignBaseModel} from './model';

class CampaignsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getStoreList(appId:string):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public createLoyaltyCampaign(appId:string,campaign:LoyaltyCampaignBaseModel):AxiosPromise<RestApiResultLoyaltyCampaignModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,campaign);
	}
	public createRetentionCampaign(appId:string,campaign:RetentionCampaignBaseModel):AxiosPromise<RestApiResultRetentionCampaignModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,campaign);
	}
	public getLoyaltyCampaignsForStore(appId:string,storeId:integer):AxiosPromise<RestApiArrayResultLoyaltyCampaignModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getRetentionCampaignsForStore(appId:string,storeId:integer):AxiosPromise<RestApiArrayResultRetentionCampaignModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public updateLoyaltyCampaign(appId:string,campaignId:integer,campaign:LoyaltyCampaignBaseModel):AxiosPromise<RestApiResultLoyaltyCampaignModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,campaign);
	}
	public updateRetentionCampaign(appId:string,campaignId:integer,campaign:RetentionCampaignBaseModel):AxiosPromise<RestApiResultRetentionCampaignModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,campaign);
	}
	public removeCampaign(appId:string,campaignId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const campaignsApi = new CampaignsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
