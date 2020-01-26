import { Reducer, Action } from 'redux';
import { createReducer } from 'reduxsauce';

import { IAppState, INITIAL_STATE, initialState, ImmutableAppState } from './types/state';
import { AppTypes } from './action-creators';
import { IAttackFinishPayload } from './types/action-payloads';

const attackStart = (state: ImmutableAppState): ImmutableAppState => state.merge({ attacking: true });
const attackFinish = (
	state: ImmutableAppState,
	{ players, modal, lastDamagedPlayers, winner }: Action & IAttackFinishPayload,
): ImmutableAppState => state.merge({ attacking: false, players, modal, lastDamagedPlayers, winner });
const modalShow = (state: ImmutableAppState, { modal }: Action & IAppState): ImmutableAppState =>
	state.merge({ modal });
const modalHide = (state: ImmutableAppState): ImmutableAppState => state.merge({ modal: undefined });
const playAgain = (state: ImmutableAppState): ImmutableAppState => state.merge({ ...initialState });

export const reducer: Reducer<ImmutableAppState, Action & IAppState> = createReducer(INITIAL_STATE, {
	[AppTypes.ATTACK_START]: attackStart,
	[AppTypes.ATTACK_FINISH]: attackFinish,
	[AppTypes.MODAL_SHOW]: modalShow,
	[AppTypes.MODAL_HIDE]: modalHide,
	[AppTypes.PLAY_AGAIN]: playAgain,
});
