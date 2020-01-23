import { IPlayer } from 'core/domain/Player';

// import { DefaultActionTypes } from 'reduxsauce';

export interface IAttackStartPayload {}
// export const attackStartPayload: IAttackStartPayload = {};
export const attackStartPayload = null;

export interface IAttackFinishPayload {
	players: IPlayer[];
}
// export const attackFinishPayload: IAttackFinishPayload = {
// 	// language: '',
// };
export const attackFinishPayload = {
	players: null,
};

export interface IPlayAgainPayload {
	// errorMessage: string;
}
// export const playAgainPayload: IPlayAgainPayload = {
// 	// errorMessage: 'An error occurred when setting the language.',
// };
export const playAgainPayload = null;
