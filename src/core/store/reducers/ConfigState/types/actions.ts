import { Action } from 'redux';
import { Actions } from 'reduxsauce';

import IActionCreator from '../../action-creator';
import {
	// Payload interfaces
	ISetPopupTimePayload,
	// Payload default values
	setPopupTimePayload,
} from './action-payloads';

export type ISetPopupTimeAction = ISetPopupTimePayload & Action;

export interface IConfigStateActionsCreators {
	setPopupTime: IActionCreator<ISetPopupTimePayload, ISetPopupTimeAction>;
}

export const actions: Actions = {
	setPopupTime: setPopupTimePayload,
};
