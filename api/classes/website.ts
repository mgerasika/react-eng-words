/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {di} from 'swagger-typescript-generator';
import {RestApiResultIndexPageBaseModel,RestApiResultWebsiteTestimonialModel,RestApiResultWebsiteImageModel,IndexPageBaseModel,WebsiteTestimonialBaseModel} from './model';
import {ImageLocationEnum} from './enum';

class WebsiteApi{
	private _apiUrl:string; 
	public constructor(apiUrl:string) {
		this._apiUrl = apiUrl; 
	}
	public setIndexConfiguration(appId:string,indexPage:IndexPageBaseModel):AxiosPromise<RestApiResultIndexPageBaseModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,indexPage);
	}
	public website_CheckNow(appId:string):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.get(url);
	}
	public addTestimonial(appId:string,testimonial:WebsiteTestimonialBaseModel):AxiosPromise<RestApiResultWebsiteTestimonialModel>{
		const url = `${this._apiUrl}`;
		return di.requestService.post(url ,testimonial);
	}
	public uploadWebsiteImage(appId:string,imageLocation:ImageLocationEnum,Image:file):AxiosPromise<RestApiResultWebsiteImageModel>{
		const url = `${this._apiUrl}`;
		const formData = new FormData();
		formData.append('Image',Image)
		return di.requestService.post(url);
	}
	public deleteTestimonial(appId:string,testimonialId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
	public deleteWebsiteImage(appId:string,imageId:integer):AxiosPromise<undefined>{
		const url = `${this._apiUrl}`;
		return di.requestService.delete(url);
	}
}
export const websiteApi = new WebsiteApi('https://flipdish-yellow-team-qa.azurewebsites.net/swagger/docs/v1.0');
