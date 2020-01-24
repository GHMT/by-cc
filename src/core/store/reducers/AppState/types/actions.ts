import { Action } from 'redux';
import { Actions } from 'reduxsauce';

import IActionCreator from '../../action-creator';
import {
	// Payload interfaces
	IAttackStartPayload,
	IAttackFinishPayload,
	IPlayAgainPayload,
	IModalShowPayload,
	IModalHidePayload,
	// Payload default values
	attackStartPayload,
	attackFinishPayload,
	playAgainPayload,
	modalShowPayload,
	modalHidePayload,
} from './action-payloads';

export type IAttackStartAction = IAttackStartPayload & Action;
export type IAttackFinishAction = IAttackFinishPayload & Action;
export type IPlayAgainAction = IPlayAgainPayload & Action;
export type IModalShowAction = IModalShowPayload & Action;
export type IModalHideAction = IModalHidePayload & Action;

export interface IAppStateActionsCreators {
	attackStart: IActionCreator<IAttackStartPayload, IAttackStartAction>;
	attackFinish: IActionCreator<IAttackFinishPayload, IAttackFinishAction>;
	playAgain: IActionCreator<IPlayAgainPayload, IPlayAgainAction>;
	modalShow: IActionCreator<IModalShowPayload, IModalShowAction>;
	modalHide: IActionCreator<IModalHidePayload, IModalHideAction>;
}

export const actions: Actions = {
	attackStart: attackStartPayload,
	attackFinish: attackFinishPayload,
	playAgain: playAgainPayload,
	modalShow: modalShowPayload,
	modalHide: modalHidePayload,
};
