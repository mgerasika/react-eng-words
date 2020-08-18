/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultBankAccountDetailModel,RestApiResultAccountFieldsDefinitionsModel,BankAccountCreateModel} from './model';

class BankAccountApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public createBankAccount(appId:string,account:BankAccountCreateModel):AxiosPromise<RestApiResultBankAccountDetailModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,account);
	}
	public deleteBankAccount(appId:string,id:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public getFieldDefinitions(appId:string):AxiosPromise<RestApiResultAccountFieldsDefinitionsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public updateBankAccountState(appId:string,accountId:integer,state:string,reason:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,reason);
	}
	public attachBankAccountToStore(appId:string,accountId:integer,storeId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
}
export const bankAccountApi = new BankAccountApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
