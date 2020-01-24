import Immutable, { ImmutableObject } from 'seamless-immutable';

import { IPlayer } from 'core/domain/Player';
import { ModalTypes } from 'shared/components/Modal';
import { IDamagedPlayer } from 'shared/utils/game-algorithm';

export interface IAppState {
	attacking: boolean;
	winner: string | undefined;
	players: IPlayer[];
	modal: ModalTypes | undefined;
	lastDamagedPlayers: IDamagedPlayer[] | undefined;
}

export type ImmutableAppState = ImmutableObject<IAppState>;

export const INITIAL_STATE: ImmutableAppState = Immutable<IAppState>({
	attacking: false,
	winner: undefined,
	players: [
		{ name: 'Max', health: 100, avatar: 'Avatar URL here', dices: Array(2).fill(0) },
		{ name: 'Monster', health: 100, avatar: 'Avatar URL here', dices: Array(2).fill(0) },
	],
	modal: undefined,
	lastDamagedPlayers: undefined,
});
