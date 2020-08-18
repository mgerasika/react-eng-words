/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {EventSearchResultModel,RestApiEventSearchPaginationResultModel} from './model';

class EventsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getEventsById(eventId:string):AxiosPromise<EventSearchResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getMenuEvents(menuId:integer,limit:integer,page:integer,start:string,end:string,orderId:integer,storeId:integer,storeGroupId:integer,userId:integer,userEmail:string,userName:string,voucherCode:string,eventType:array,flipdishEventId:string):AxiosPromise<RestApiEventSearchPaginationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getUserEvents(userId:integer,limit:integer,page:integer,start:string,end:string,orderId:integer,storeId:integer,storeGroupId:integer,userId:integer,userEmail:string,userName:string,voucherCode:string,eventType:array,flipdishEventId:string):AxiosPromise<RestApiEventSearchPaginationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getOrderEvents(orderId:integer,limit:integer,page:integer,start:string,end:string,orderId:integer,storeId:integer,storeGroupId:integer,userId:integer,userEmail:string,userName:string,voucherCode:string,eventType:array,flipdishEventId:string):AxiosPromise<RestApiEventSearchPaginationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getStoreEvents(storeId:integer,limit:integer,page:integer,start:string,end:string,orderId:integer,storeId:integer,storeGroupId:integer,userId:integer,userEmail:string,userName:string,voucherCode:string,eventType:array,flipdishEventId:string):AxiosPromise<RestApiEventSearchPaginationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getCustomerEvents(customerId:integer,limit:integer,page:integer,start:string,end:string,orderId:integer,storeId:integer,storeGroupId:integer,userId:integer,userEmail:string,userName:string,voucherCode:string,eventType:array,flipdishEventId:string):AxiosPromise<RestApiEventSearchPaginationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getWhiteLabelEvents(whitelabelId:integer,limit:integer,page:integer,start:string,end:string,orderId:integer,storeId:integer,storeGroupId:integer,userId:integer,userEmail:string,userName:string,voucherCode:string,eventType:array,flipdishEventId:string):AxiosPromise<RestApiEventSearchPaginationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getOrderEventsByCustomer(customerId:integer,limit:integer,page:integer,start:string,end:string,orderId:integer,storeId:integer,storeGroupId:integer,userId:integer,userEmail:string,userName:string,voucherCode:string,eventType:array,flipdishEventId:string):AxiosPromise<RestApiEventSearchPaginationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getEvents(whiteLabelId:integer,customerId:integer,limit:integer,page:integer,start:string,end:string,orderId:integer,storeId:integer,storeGroupId:integer,userId:integer,userEmail:string,userName:string,voucherCode:string,eventType:array,flipdishEventId:string):AxiosPromise<RestApiEventSearchPaginationResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
}
export const eventsApi = new EventsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
