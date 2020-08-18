/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultOrderModel,RestApiPaginationResultOrderModel,RestApiPaginationResultOrderSummaryModel,AcceptModel,RefundModel,RejectModel} from './model';
import {stateEnum} from './enum';

class OrdersApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public getOrderById(id:integer):AxiosPromise<RestApiResultOrderModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getOrders(physicalRestaurantId:array,state:stateEnum,from:string,to:string,page:integer,limit:integer):AxiosPromise<RestApiPaginationResultOrderModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getOrdersSummary(appId:string,searchQuery:string,physicalRestaurantId:array,state:stateEnum,page:integer,limit:integer,orderByRequestedForTime:boolean):AxiosPromise<RestApiPaginationResultOrderSummaryModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public acceptOrder(id:integer,acceptObject:AcceptModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,acceptObject);
	}
	public refundOrder(id:integer,refundObject:RefundModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,refundObject);
	}
	public rejectOrder(id:integer,rejectObject:RejectModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,rejectObject);
	}
	public dispatchOrder(id:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
}
export const ordersApi = new OrdersApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
