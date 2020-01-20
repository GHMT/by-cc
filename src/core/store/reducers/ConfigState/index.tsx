import { Reducer, Action } from 'redux';
import { createReducer } from 'reduxsauce';

import { IConfigState, INITIAL_STATE, ImmutableConfigState } from './types/state';
import { ConfigTypes } from './action-creators';

const setPopupTime = (state: ImmutableConfigState, { popupTime }: Action & IConfigState): ImmutableConfigState =>
	state.merge({ popupTime });
// const setLanguageSuccess = (state: ImmutableConfigState, { language }: IConfigState): ImmutableConfigState =>
// 	state.merge({ language, isLoadingLanguage: false, errorMessage: '' });
// const setLanguageFailure = (state: ImmutableConfigState, { errorMessage }: IConfigState): ImmutableConfigState =>
// 	state.merge({ isLoadingLanguage: false, errorMessage });

export const reducer: Reducer<ImmutableConfigState, Action & IConfigState> = createReducer(INITIAL_STATE, {
	[ConfigTypes.SET_POPUP_TIME]: setPopupTime,
	// [ConfigTypes.SET_LANGUAGE_SUCCESS]: setLanguageSuccess,
	// [ConfigTypes.SET_LANGUAGE_FAILURE]: setLanguageFailure,
});
