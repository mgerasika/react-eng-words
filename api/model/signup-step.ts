/* This code generated with swagger-typescript-generator. Don't modify this file because it will be rewriten. */
import {ActionEnum} from './enum';
import {PredefinedAnswerModel} from './model';

export interface SignupStepModel{ 
	Action?:ActionEnum
	Question?:string
	PredefinedAnswers?:PredefinedAnswerModel[]
}