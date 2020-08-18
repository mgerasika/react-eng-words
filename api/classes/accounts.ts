/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiArrayResultLocalisedTimeZoneModel,RequestLoginPinResposneModel,CreateAccountModelModel,PasswordResetModelModel,SetPasswordWithPinModelModel,RequestLoginPinModelModel,LoginModelModel,LoginWithPinModelModel,RequestPasswordResetModelModel} from './model';
import {ActionEnum} from './enum';

class AccountsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public createAccount(createAccountModel:CreateAccountModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,createAccountModel);
	}
	public getLocalisedTimeZones():AxiosPromise<RestApiArrayResultLocalisedTimeZoneModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public passwordResetWithToken(passwordResetModel:PasswordResetModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,passwordResetModel);
	}
	public changePasswordWithPin(changePasswordModel:SetPasswordWithPinModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.put(url ,changePasswordModel);
	}
	public requestLoginPin(requestLoginPinRequest:RequestLoginPinModelModel):AxiosPromise<RequestLoginPinResposneModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,requestLoginPinRequest);
	}
	public login(loginModel:LoginModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,loginModel);
	}
	public logout():AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public loginWithPin(loginModel:LoginWithPinModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,loginModel);
	}
	public requestPasswordReset(requestPasswordResetModel:RequestPasswordResetModelModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,requestPasswordResetModel);
	}
	public skipSignupStep(signupStepAction:ActionEnum):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public answerSignUpQuestion(signupStepAction:ActionEnum,answerId:number):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,answerId);
	}
}
export const accountsApi = new AccountsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
