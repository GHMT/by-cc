import Immutable, { ImmutableObject } from 'seamless-immutable';

export interface IConfigState {
	popupTime: number; // In miliseconds
}

export type ImmutableConfigState = ImmutableObject<IConfigState>;

export const INITIAL_STATE: ImmutableConfigState = Immutable<IConfigState>({
	popupTime: 4000,
});
