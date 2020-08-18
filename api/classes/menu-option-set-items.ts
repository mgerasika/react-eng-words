/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {MenuItemOptionSetItemBaseModel} from './model';

class MenuOptionSetItemsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public addMenuItemOptionSetItem(menuId:integer,menuSectionId:integer,menuSectionItemId:integer,optionSetId:integer,menuItemOptionSetItem:MenuItemOptionSetItemBaseModel):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,menuItemOptionSetItem);
	}
	public removeMenuItemOptionSetItem(menuId:integer,menuSectionId:integer,menuSectionItemId:integer,optionSetId:integer,menuItemOptionSetItemId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public deleteOptionSetItemImage(menuId:integer,menuSectionId:integer,menuSectionItemId:integer,optionSetId:integer,menuItemOptionSetItemId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public setOptionSetItemTax(menuId:integer,menuSectionId:integer,menuSectionItemId:integer,optionSetId:integer,menuItemOptionSetItemId:integer,taxRateId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
}
export const menuOptionSetItemsApi = new MenuOptionSetItemsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
