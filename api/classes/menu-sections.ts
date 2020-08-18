/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultMenuSectionModel,MenuSectionBaseModel,MenuSectionAvailabilityBaseModel,MenuObjectDisplayOrdersModel,BusinessHoursPeriodBaseModel} from './model';
import {DayEnum} from './enum';

class MenuSectionsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public createMenuSection(menuId:integer,menuSection:MenuSectionBaseModel):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,menuSection);
	}
	public deleteMenuSection(menuId:integer,menuSectionId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public cloneMenuSection(menuId:integer,menuSectionId:integer):AxiosPromise<RestApiResultMenuSectionModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public deleteMenuSectionImage(menuId:integer,menuSectionId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public createMenuSectionAvailability(menuId:integer,menuSectionId:integer,menuSectionAvailability:MenuSectionAvailabilityBaseModel):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,menuSectionAvailability);
	}
	public menuSections_SetItemDisplayOrders(menuId:integer,menuSectionId:integer,displayOrders:MenuObjectDisplayOrdersModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,displayOrders);
	}
	public createMenuAvailabilityForDay(menuId:integer,menuSectionId:integer,dayOfWeek:DayEnum,businessHoursPeriod:BusinessHoursPeriodBaseModel):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,businessHoursPeriod);
	}
}
export const menuSectionsApi = new MenuSectionsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
