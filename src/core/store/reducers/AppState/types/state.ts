import Immutable, { ImmutableObject } from 'seamless-immutable';

import { IPlayer } from 'core/domain/Player';
import { ModalTypes } from 'shared/components/Modal';
import { IDamagedPlayer } from 'core/game/game-algorithm';
import { player, enemies } from 'core/store/reducers/ConfigState/types/state';

export interface IAppState {
	attacking: boolean;
	winner: IPlayer | undefined;
	players: IPlayer[];
	modal: ModalTypes | undefined;
	lastDamagedPlayers: IDamagedPlayer[] | undefined;
}

export type ImmutableAppState = ImmutableObject<IAppState>;

export const initialState: IAppState = {
	attacking: false,
	winner: undefined,
	players: [player, ...enemies],
	modal: undefined,
	lastDamagedPlayers: undefined,
};

export const INITIAL_STATE: ImmutableAppState = Immutable<IAppState>(initialState);
