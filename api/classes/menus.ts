/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiArrayResultMenuTaxDetailsModel,RestApiArrayResultMenuStoreNamesModel,RestApiArrayResultMenuCheckpointModel,RestApiArrayResultAllMetadataResultModel,MenuTaxRateModel,RestApiResultMenuModel,CreateFullMenuModel,MetadataModel,MenuObjectDisplayOrdersModel} from './model';
import {TaxTypeEnum} from './enum';

class MenusApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public createNewMenuForApp(appId:string,menu:CreateFullMenuModel):AxiosPromise<integer>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,menu);
	}
	public deleteMenu(menuId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public getMenuTaxDetails(menuId:integer):AxiosPromise<RestApiArrayResultMenuTaxDetailsModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getMenuStoreNames(menuId:integer):AxiosPromise<RestApiArrayResultMenuStoreNamesModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getMenusCheckpoints(menuId:integer):AxiosPromise<RestApiArrayResultMenuCheckpointModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public getAllMenuMetadataByMenuIdAndStoreId(menuId:integer,storeId:integer):AxiosPromise<RestApiArrayResultAllMetadataResultModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public setMenuItemMetadata(menuId:integer,storeId:integer,menuItemId:integer,metadata:MetadataModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.put(url ,metadata);
	}
	public deleteMenuItemMetadata(menuId:integer,storeId:integer,menuItemId:integer,key:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public setMenuItemOptionSetItemMetadata(menuId:integer,storeId:integer,optionSetItemId:integer,metadata:MetadataModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.put(url ,metadata);
	}
	public uploadNewMenuForApp(appId:string,Menu:file):AxiosPromise<integer>{
		const url = `${this._apiUrl}`;
		const formData = new FormData();
		formData.append('Menu',Menu)
		return di.requestService.post(url);
	}
	public setMenuLock(menuId:integer,locked:boolean):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,locked);
	}
	public setMenuName(menuId:integer,name:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,name);
	}
	public deleteMenuImage(menuId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public menus_UpsertTaxRate(menuId:integer,taxRate:MenuTaxRateModel):AxiosPromise<MenuTaxRateModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,taxRate);
	}
	public createDraftMenuFromExistingMenu(menuId:integer,newName:string):AxiosPromise<RestApiResultMenuModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public menus_SetDisplayOnMenuTax(menuId:integer,show:boolean):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public menus_UpdateTaxType(menuId:integer,type:TaxTypeEnum):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public menus_SetItemDisplayOrders(menuId:integer,displayOrders:MenuObjectDisplayOrdersModel):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,displayOrders);
	}
	public restore a Menu Checkpoint(menuId:integer,checkpointId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url);
	}
	public menus_DeleteTaxRate(menuId:integer,taxId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const menusApi = new MenusApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
