import { IAppState } from './state';

// import { DefaultActionTypes } from 'reduxsauce';

export interface IAttackStartPayload {}
// export const attackStartPayload: IAttackStartPayload = {};
export const attackStartPayload = null;

export interface IAttackFinishPayload {
	players: IAppState['players'];
	modal: IAppState['modal'];
	lastDamagedPlayers: IAppState['lastDamagedPlayers'];
	winner: IAppState['winner'];
}
// export const attackFinishPayload: IAttackFinishPayload = {
// 	// language: '',
// };
export const attackFinishPayload = {
	players: null,
	modal: null,
	lastDamagedPlayers: null,
	winner: null,
};

export interface IPlayAgainPayload {
	// errorMessage: string;
}
// export const playAgainPayload: IPlayAgainPayload = {
// 	// errorMessage: 'An error occurred when setting the language.',
// };
export const playAgainPayload = null;

export interface IModalShowPayload {
	modal: IAppState['modal'];
}
// export const playAgainPayload: IPlayAgainPayload = {
// 	// errorMessage: 'An error occurred when setting the language.',
// };
export const modalShowPayload = {
	modal: null,
};

export interface IModalHidePayload {
	// modal: string;
}
// export const playAgainPayload: IPlayAgainPayload = {
// 	// errorMessage: 'An error occurred when setting the language.',
// };
export const modalHidePayload = null;
