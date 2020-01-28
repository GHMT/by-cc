import Immutable, { ImmutableObject } from 'seamless-immutable';

import { IPlayer } from 'core/domain/Player';
import { Enemies, Player } from 'core/game/players';

export interface IConfigState {
	player: IPlayer; // Player user is representing
	enemies: IPlayer[];
	popupTime: number; // In miliseconds
}
export const player: IPlayer = {
	name: 'You',
	health: 100,
	avatar: Player,
	dices: Array(2).fill(0),
};
export const enemies: IPlayer[] = [
	{
		name: 'Majin Boo',
		health: 100,
		avatar: Enemies.MajinBoo,
		dices: Array(2).fill(0),
	},
	// {
	// 	name: 'Freezer',
	// 	health: 100,
	// 	avatar: Enemies.Freezer,
	// 	dices: Array(5).fill(0),
	// },
	// {
	// 	name: 'Vegeta',
	// 	health: 100,
	// 	avatar: Enemies.Vegeta,
	// 	dices: Array(5).fill(0),
	// },
];

export type ImmutableConfigState = ImmutableObject<IConfigState>;

export const INITIAL_STATE: ImmutableConfigState = Immutable<IConfigState>({
	player,
	enemies,
	popupTime: 3500,
});
