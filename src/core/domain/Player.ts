/**
 * Model-Adapter pattern: https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
 * We use a variation of this pattern. We add an Interface to represent the API object.
 * Take a look also to the same pattern in React (do not use like this anyway): https://sendgrid.com/blog/using-the-adapter-design-pattern-with-react/
 * Example: Player
 */

import IAdapter from './adapter';

export interface IPlayer {
	readonly name: string;
	readonly avatar: string;
	readonly dices?: number;
}

export class Player {
	private _health = 100;
	readonly name: string;
	readonly avatar: string;
	readonly dices?: number = 2;

	constructor(player: IPlayer) {
		this.name = player.name;
		this.avatar = player.avatar;

		if (player.dices) {
			this.dices = player.dices;
		}
	}

	get health(): number {
		return this._health;
	}

	set health(newHealth: number) {
		this._health = newHealth;
	}
}

class PlayerAdapter implements IAdapter<Player> {
	adapt(item: IPlayer): Player {
		return new Player(item);
	}
}

export const PlayerAdapterSingleton: PlayerAdapter = new PlayerAdapter();
