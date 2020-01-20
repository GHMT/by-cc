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
		{ name: 'Max', avatar: 'Avatar URL here' },
		{ name: 'Monster', avatar: 'Avatar URL here' },
	],
});
