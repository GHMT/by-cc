import { ModalInfo } from './components';

export enum ModalTypes {
	DAMAGE_INFO = 'DAMAGE_INFO',
	// GAME_WIN = 'b',
	// GAME_OVER = 'c',
}
//
// export type IModalType = 'DAMAGE_INFO';
// | 'GAME_WIN'
// | 'GAME_OVER';
type IModal = { [key in ModalTypes]: IModalComponents };

export interface IModalComponents {
	component: React.FC<any>;
}

const ModalComponents: IModal = {
	DAMAGE_INFO: {
		component: ModalInfo,
	},
	// GAME_WIN: 	// 	type: 'Game Win',
	// },
	// GAME_OVER: {
	// 	type: 'Game Over',
	// },
};

export default ModalComponents;
