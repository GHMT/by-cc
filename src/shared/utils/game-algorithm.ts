import { Player } from 'core/domain/Player';

export interface IDamagedPlayer {
	player: Player;
	damage: number;
}

export const attack = (players: Player[]): IDamagedPlayer[] => {
	// const hitPlayers = [];
	const maxPoints = rollDices(players);
	return updateHealth(players, maxPoints);
};

const rollDices = (players: Player[]): number => {
	let maxPoints = 0;

	players.forEach(player => {
		if (player.health > 0) {
			const playerPoints = player.rollDices().reduce((acc, diceResult) => acc + diceResult, 0);
			if (playerPoints > maxPoints) maxPoints = playerPoints;
		}
	});
	console.log('Maxpoints: ', maxPoints);

	return maxPoints;
};

const updateHealth = (players: Player[], maxPoints: number): IDamagedPlayer[] => {
	const damagedPlayers: IDamagedPlayer[] = [];

	players.forEach(player => {
		const damage = maxPoints - player.dices.reduce((acc, diceResult) => acc + diceResult, 0);
		if (damage > 0 && player.health > 0) {
			const newHealth = player.health - damage;
			player.health = newHealth < 0 ? 0 : newHealth;
			console.log(`${player.name} losses ${damage} points!`);
			damagedPlayers.push({ player, damage });
		}
	});

	return damagedPlayers;
};

export const getWinner = (players: Player[]): Player | undefined => {
	const winners = players.filter(player => player.health > 0);
	return winners.length === 1 ? winners[0] : undefined;
};
