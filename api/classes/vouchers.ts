/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultVoucherWithStatsModel,RestApiArrayResultVoucherDataPointModel,RestApiPaginationResultVoucherSummaryModel,VoucherBaseModel,CreateVoucherModel} from './model';
import {aggregateDataByEnum,stateEnum} from './enum';

class VouchersApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public updateVoucher(voucherId:integer,voucher:VoucherBaseModel,storeId:array,percentValue:integer,lumpValue:number,freeItemId:integer):AxiosPromise<RestApiResultVoucherWithStatsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,voucher);
	}
	public getVoucherStatsById(voucherId:integer,aggregateDataBy:aggregateDataByEnum,dataPointLimit:integer):AxiosPromise<RestApiArrayResultVoucherDataPointModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getVouchers(appId:string,pageIndex:integer,pageSize:integer,searchCodes:array,statusSearch:stateEnum,typeSearch:stateEnum,subTypeSearch:stateEnum,storeIds:array):AxiosPromise<RestApiPaginationResultVoucherSummaryModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public createVoucher(appId:string,voucher:CreateVoucherModel):AxiosPromise<RestApiResultVoucherWithStatsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,voucher);
	}
}
export const vouchersApi = new VouchersApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
