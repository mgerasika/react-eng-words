/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultMenuSectionItemModel,MenuSectionItemBaseModel} from './model';

class MenuSectionItemsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public createMenuSectionItem(menuId:integer,menuSectionId:integer,menuSectionItem:MenuSectionItemBaseModel):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,menuSectionItem);
	}
	public deleteMenuSectionItem(menuId:integer,menuSectionId:integer,menuSectionItemId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public cloneMenuSectionItem(menuId:integer,menuSectionId:integer,menuSectionItemId:integer):AxiosPromise<RestApiResultMenuSectionItemModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public deleteMenuSectionItemImage(menuId:integer,menuSectionId:integer,menuSectionItemId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public setSectionItemTax(menuId:integer,menuSectionId:integer,menuSectionItemId:integer,taxRateId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public moveMenuItem(menuId:integer,menuSectionId:integer,menuSectionItemId:integer,destinationDisplayOrder:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
}
export const menuSectionItemsApi = new MenuSectionItemsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
