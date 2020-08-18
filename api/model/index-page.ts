/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {WebsiteTestimonialModel,WebsiteImageModel} from './model';

export interface IndexPageModel{ 
	Testimonials?:WebsiteTestimonialModel[]
	Images?:WebsiteImageModel[]
	AboutSectionEnabled?:boolean
	AboutSectionTitle?:string
	AboutSectionSubtitle?:string
	AboutSectionLeftTitle?:string
	AboutSectionLeftBody?:string
	AboutSectionRightTitle?:string
	AboutSectionRightBody?:string
	OpeningHoursEnabled?:boolean
	MenuPreviewEnabled?:boolean
	GalleryEnabled?:boolean
	TestimonialsEnabled?:boolean
	ContactFormEnabled?:boolean
	ContactFormEmail?:string
	MapEnabled?:boolean
}