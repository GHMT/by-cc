/**
 * Model-Adapter pattern: https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
 * We use a variation of this pattern. We add an Interface to represent the API object.
 * Take a look also to the same pattern in React (do not use like this anyway): https://sendgrid.com/blog/using-the-adapter-design-pattern-with-react/
 * Example: Player
 */

import { getRndInteger } from 'shared/utils/Math';

import IAdapter from './adapter';

export interface IPlayer {
	readonly name: string;
	readonly health: number;
	readonly avatar: string;
	readonly dices: number[];
}

export class Player {
	private _health: number;
	readonly name: string;
	readonly avatar: string;
	private _dices: number[];

	constructor(player: IPlayer) {
		this.name = player.name;
		this.avatar = player.avatar;
		this._health = player.health;
		this._dices = player.dices;
	}

	get health(): number {
		return this._health;
	}

	set health(newHealth: number) {
		this._health = newHealth;
	}

	get dices(): number[] {
		return this._dices;
	}

	rollDices(): number[] {
		this._dices = this._dices.map(() => getRndInteger(1, 6));

		return this.dices;
	}
}

class PlayerAdapter implements IAdapter<IPlayer, Player> {
	adapt(item: IPlayer): Player {
		return new Player(item);
	}

	adaptBack(item: Player): IPlayer {
		return {
			name: item.name,
			health: item.health,
			avatar: item.avatar,
			dices: item.dices,
		};
	}
}

export const PlayerAdapterSingleton: PlayerAdapter = new PlayerAdapter();
