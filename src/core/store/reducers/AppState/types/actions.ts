import { Action } from 'redux';
import { Actions } from 'reduxsauce';

import IActionCreator from '../../action-creator';
import {
	// Payload interfaces
	IAttackStartPayload,
	IAttackFinishPayload,
	IPlayAgainPayload,
	// Payload default values
	attackStartPayload,
	attackFinishPayload,
	playAgainPayload,
} from './action-payloads';

export type IAttackStartAction = IAttackStartPayload & Action;
export type IAttackFinishAction = IAttackFinishPayload & Action;
export type IPlayAgainAction = IPlayAgainPayload & Action;

export interface IAppStateActionsCreators {
	attackStart: IActionCreator<IAttackStartPayload, IAttackStartAction>;
	attackFinish: IActionCreator<IAttackFinishPayload, IAttackFinishAction>;
	playAgain: IActionCreator<IPlayAgainPayload, IPlayAgainAction>;
}

export const actions: Actions = {
	attackStart: attackStartPayload,
	attackFinish: attackFinishPayload,
	playAgain: playAgainPayload,
};
