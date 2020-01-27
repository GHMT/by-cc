import { ModalInfo, ModalGameEnds } from './components';

export enum ModalTypes {
	DAMAGE_INFO = 'DAMAGE_INFO',
	GAME_ENDS = 'GAME_ENDS',
}

type IModal = { [key in ModalTypes]: IModalComponents };

export interface IModalComponents {
	component: React.FC<any>;
}

const ModalComponents: IModal = {
	DAMAGE_INFO: {
		component: ModalInfo,
	},
	GAME_ENDS: {
		component: ModalGameEnds,
	},
};

export default ModalComponents;
