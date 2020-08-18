/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultStripeConnectedAccountModel,RestApiResultBankAccountDetailModel,BankAccountCreateModel,StripeAccountLinkRequestModel,SetBankAccountBusinessTypeRequestModel} from './model';

class StripeCustomConnectApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getVerificationStatus(appId:string,stripeId:string):AxiosPromise<RestApiResultStripeConnectedAccountModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public stripeCustomConnect_Refresh(linkRequestId:integer,appId:string):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public createBankAccountAndConnectedAccount(appId:string,account:BankAccountCreateModel):AxiosPromise<RestApiResultBankAccountDetailModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,account);
	}
	public createStripeConnectedAccountLink(appId:string,stripeAccountLinkRequest:StripeAccountLinkRequestModel):AxiosPromise<RestApiResultStripeConnectedAccountModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,stripeAccountLinkRequest);
	}
	public createStripeConnectedAccount(appId:string,bankAccountId:number):AxiosPromise<RestApiResultStripeConnectedAccountModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,bankAccountId);
	}
	public setBankAccountBusinessType(appId:string,request:SetBankAccountBusinessTypeRequestModel):AxiosPromise<RestApiResultBankAccountDetailModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,request);
	}
}
export const stripeCustomConnectApi = new StripeCustomConnectApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
