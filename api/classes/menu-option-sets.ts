/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {MenuItemOptionSetBaseModel} from './model';

class MenuOptionSetsApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public createMenuItemOptionSet(menuId:integer,menuSectionId:integer,menuSectionItemId:integer,menuItemOptionSet:MenuItemOptionSetBaseModel):AxiosPromise<object>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,menuItemOptionSet);
	}
	public deleteMenuItemOptionSet(menuId:integer,menuSectionItemId:integer,menuSectionId:integer,optionSetId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public deleteOptionSetImage(menuId:integer,menuSectionId:integer,menuSectionItemId:integer,optionSetId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const menuOptionSetsApi = new MenuOptionSetsApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
