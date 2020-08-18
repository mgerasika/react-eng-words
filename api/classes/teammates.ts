/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultTeammateModel,RestApiResultRedeemInvitationResultModel,CreateTeammateModel} from './model';

class TeammatesApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public createTeammate(appId:string,teammate:CreateTeammateModel):AxiosPromise<RestApiResultTeammateModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,teammate);
	}
	public deleteTeammate(appId:string,id:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public redeemInvitation(otc:string,appId:string):AxiosPromise<RestApiResultRedeemInvitationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
}
export const teammatesApi = new TeammatesApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
