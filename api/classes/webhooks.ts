/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiStringArrayResultModel,RestApiIntegerResultModel,WebhookEventSampleModel,RestApiPaginationResultWebhookLogModel,WebhookSubscriptionModel} from './model';

class WebhooksApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getWebhookEventNames(appId:string):AxiosPromise<RestApiStringArrayResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public craeteWebhookSubscription(oauthAppId:string,webhookSubscription:WebhookSubscriptionModel,appId:string):AxiosPromise<RestApiIntegerResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,webhookSubscription);
	}
	public getWebhookEventNamesBySubscriptionId(oauthAppId:string,webhookSubscriptionId:integer,appId:string):AxiosPromise<RestApiStringArrayResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getWebhookEventSample(eventName:string,version:string,appId:string,oauthAppId:string,webhookSubscriptionId:string):AxiosPromise<WebhookEventSampleModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getWebhookLogs(oauthAppId:string,webhookSubscriptionId:integer,start:string,end:string,page:integer,limit:integer,appId:string):AxiosPromise<RestApiPaginationResultWebhookLogModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public deleteWebhookSubscription(oauthAppId:string,webhookSubscriptionId:integer,appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public deleteWebhookSubscriptionEventName(oauthAppId:string,webhookSubscriptionId:integer,eventName:string,appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const webhooksApi = new WebhooksApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
