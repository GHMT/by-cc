import { DefaultActionTypes } from 'reduxsauce';
import { IConfigState } from './state';

export interface ISetPopupTimePayload extends DefaultActionTypes {
	popupTime: IConfigState['popupTime']; // In miliseconds
}
export const setPopupTimePayload: ISetPopupTimePayload = {
	popupTime: 4000,
};
