import Immutable, { ImmutableObject } from 'seamless-immutable';

import { IPlayer } from 'core/domain/Player';
import { Enemies, Player } from 'core/game/players';

export interface IConfigState {
	player: IPlayer; // Player user is representing
	enemies: IPlayer[];
	popupTime: number; // In miliseconds
}
export const player: IPlayer = {
	name: 'Max',
	health: 100,
	avatar: Player,
	dices: Array(2).fill(0),
};
export const enemies: IPlayer[] = [
	{
		name: 'Majin Boo',
		health: 100,
		avatar: Enemies.MajinBoo,
		dices: Array(4).fill(0),
	},
];

export type ImmutableConfigState = ImmutableObject<IConfigState>;

export const INITIAL_STATE: ImmutableConfigState = Immutable<IConfigState>({
	player,
	enemies,
	popupTime: 3500,
});
