import { IAppState } from './state';

// import { DefaultActionTypes } from 'reduxsauce';

export interface IAttackStartPayload {}
export const attackStartPayload = null;

export interface IAttackFinishPayload {
	players: IAppState['players'];
	modal: IAppState['modal'];
	lastDamagedPlayers: IAppState['lastDamagedPlayers'];
	winner: IAppState['winner'];
}
export const attackFinishPayload = {
	players: null,
	modal: null,
	lastDamagedPlayers: null,
	winner: null,
};

export interface IPlayAgainPayload {}
export const playAgainPayload = null;

export interface IModalShowPayload {
	modal: IAppState['modal'];
}
export const modalShowPayload = {
	modal: null,
};

export interface IModalHidePayload {}
export const modalHidePayload = null;
