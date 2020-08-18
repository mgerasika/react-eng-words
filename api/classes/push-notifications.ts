/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultPushNotificationResponseModel,PushNotificationRequestModel} from './model';

class PushNotificationsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public schedulePushNotification(appId:string,notification:PushNotificationRequestModel):AxiosPromise<RestApiResultPushNotificationResponseModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,notification);
	}
	public deletePushNotification(appId:string,scheduledPushNotificationId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const pushNotificationsApi = new PushNotificationsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
