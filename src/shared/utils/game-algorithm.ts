import { Player } from 'core/domain/Player';

export const rollDices = (players: Player[]) => {
	// const playersUpdated = players.map(player => {
	// })
	// let roundWinner =
	players.forEach(player => {
		console.log('Player:', player.name);
		console.log('Points: ', player.rollDices());
		// console.log('Dice results:', player.dicesResult);
	});
};
