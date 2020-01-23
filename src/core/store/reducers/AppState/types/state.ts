import Immutable, { ImmutableObject } from 'seamless-immutable';
import { IPlayer } from 'core/domain/Player';

export interface IAppState {
	attacking: boolean;
	winner: string | undefined;
	players: IPlayer[];
}

export type ImmutableAppState = ImmutableObject<IAppState>;

export const INITIAL_STATE: ImmutableAppState = Immutable<IAppState>({
	attacking: false,
	winner: undefined,
	players: [
		{ name: 'Max', health: 100, avatar: 'Avatar URL here', dices: Array(2).fill(0) },
		{ name: 'Monster', health: 100, avatar: 'Avatar URL here', dices: Array(2).fill(0) },
	],
});
