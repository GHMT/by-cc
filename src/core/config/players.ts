import { IPlayer } from 'core/domain/Player';

export const player: IPlayer = { name: 'Max', health: 10, avatar: 'Avatar URL here', dices: Array(2).fill(0) };

export const enemies: IPlayer[] = [{ name: 'Monster', health: 10, avatar: 'Avatar URL here', dices: Array(2).fill(0) }];
