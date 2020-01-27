import { Reducer, Action } from 'redux';
import { createReducer } from 'reduxsauce';

import { IConfigState, INITIAL_STATE, ImmutableConfigState } from './types/state';
import { ConfigTypes } from './action-creators';

const setPopupTime = (state: ImmutableConfigState, { popupTime }: Action & IConfigState): ImmutableConfigState =>
	state.merge({ popupTime });

export const reducer: Reducer<ImmutableConfigState, Action & IConfigState> = createReducer(INITIAL_STATE, {
	[ConfigTypes.SET_POPUP_TIME]: setPopupTime,
});
