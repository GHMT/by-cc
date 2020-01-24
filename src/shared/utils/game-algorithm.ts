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
		const playerPoints = player.rollDices().reduce((acc, diceResult) => acc + diceResult, 0);
		if (playerPoints > maxPoints) maxPoints = playerPoints;
	});
	console.log('Maxpoints: ', maxPoints);

	return maxPoints;
};

const updateHealth = (players: Player[], maxPoints: number): IDamagedPlayer[] => {
	const damagedPlayers: IDamagedPlayer[] = [];

	players.forEach(player => {
		const damage = maxPoints - player.dices.reduce((acc, diceResult) => acc + diceResult, 0);
		player.health = player.health - damage;
		if (damage > 0) {
			console.log(`${player.name} losses ${damage} points!`);
			damagedPlayers.push({ player, damage });
		}
	});

	return damagedPlayers;
};
