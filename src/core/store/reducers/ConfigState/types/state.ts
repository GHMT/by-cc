import Immutable, { ImmutableObject } from 'seamless-immutable';

import { IPlayer } from 'core/domain/Player';

export interface IConfigState {
	player: IPlayer; // Player user is representing
	enemies: IPlayer[];
	popupTime: number; // In miliseconds
}
export const player: IPlayer = {
	name: 'Max',
	health: 100,
	avatar:
		'https://1.bp.blogspot.com/-Jx5EPBhGQBE/WiE-F0Z2kWI/AAAAAAAAAKo/zhBrm4_1XvYQtrvF9Re5TJvTRGCKu4N5QCK4BGAYYCw/s1600/goten_%2Bssj.png',
	dices: Array(2).fill(0),
};
export const enemies: IPlayer[] = [
	{
		name: 'Monster',
		health: 100,
		avatar:
			'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddp5246-d1df8ba9-da60-4f74-bacc-4269deaa1c95.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRwNTI0Ni1kMWRmOGJhOS1kYTYwLTRmNzQtYmFjYy00MjY5ZGVhYTFjOTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BSa_t1Jpw6x547SGigyMf4DL6VAmsLgdcJJWpkGYxic',
		dices: Array(2).fill(0),
	},
];

export type ImmutableConfigState = ImmutableObject<IConfigState>;

export const INITIAL_STATE: ImmutableConfigState = Immutable<IConfigState>({
	player,
	enemies,
	popupTime: 3500,
});
