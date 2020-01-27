import { Player } from 'core/domain/Player';

export interface IDamagedPlayer {
	player: Player;
	damage: number;
}

/**
 * Ask each player to roll their dices and updates their health based on the result.
 * Return an array of the players that were damaged in the round.
 * @param players
 */
export const attack = (players: Player[]): IDamagedPlayer[] => {
	const maxPoints = rollDices(players);
	return updateHealth(players, maxPoints);
};

/**
 * Roll dices for each player and return the maximum points among all players.
 * @param players
 */
const rollDices = (players: Player[]): number => {
	let maxPoints = 0;

	players.forEach(player => {
		if (player.health > 0) {
			const playerPoints = player.rollDices().reduce((acc, diceResult) => acc + diceResult, 0);
			if (playerPoints > maxPoints) maxPoints = playerPoints;
		}
	});

	return maxPoints;
};

/**
 * Update each player's health based on the maximum points.
 * Returns an array of players that were damaged.
 * @param players
 * @param maxPoints
 */
const updateHealth = (players: Player[], maxPoints: number): IDamagedPlayer[] => {
	const damagedPlayers: IDamagedPlayer[] = [];

	players.forEach(player => {
		const damage = maxPoints - player.dices.reduce((acc, diceResult) => acc + diceResult, 0);
		if (damage > 0 && player.health > 0) {
			const newHealth = player.health - damage;
			player.health = newHealth < 0 ? 0 : newHealth;
			damagedPlayers.push({ player, damage });
		}
	});

	return damagedPlayers;
};

/**
 * Return the unique player alive (health > 0) if there is one or undefined otherwise
 * @param players
 */
export const getWinner = (players: Player[]): Player | undefined => {
	const winners = players.filter(player => player.health > 0);
	return winners.length === 1 ? winners[0] : undefined;
};
