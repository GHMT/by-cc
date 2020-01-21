import React, { useState } from 'react';
import { connect } from 'react-redux';

import View from './view';
import { ISmartProps, IStateToPropsMap, IDispatchToPropsMap } from './types';
import { IAppStore } from 'core/store/reducers';
import { PlayerAdapterSingleton, Player } from 'core/domain/Player';
import AppActions from 'core/store/reducers/AppState/action-creators';
import { IAttackStartAction } from 'core/store/reducers/AppState/types/actions';
import { Dispatch } from 'redux';

const AppContainer = (props: ISmartProps) => {
	const { players, attacking, attackStart } = props;

	// Transformed in this way due to: https://stackoverflow.com/questions/51002940/javascript-typescript-new-class-instance-inside-array-prototype-map-function
	const playerClasses: Player[] = [];
	players.forEach(iPlayer => playerClasses.push(PlayerAdapterSingleton.adapt(iPlayer)));

	// const [customId, setCustomId] = useState<IDummyProps['customId']>(null)

	// const handlecustomId = (id: IDummyProps['customId']) => {
	//     setCustomId(id);
	// }
	const handleAttack: React.MouseEventHandler<HTMLButtonElement> = () => attackStart({});

	return <View players={playerClasses} attacking={attacking} handleAttack={handleAttack} />;
};

const mapStateToProps: IStateToPropsMap = (state: IAppStore) => ({
	// App State
	attacking: state.app.attacking,
	winner: state.app.winner,
	players: state.app.players,
	//
});

const mapDispatchToProps: IDispatchToPropsMap = (dispatch: Dispatch) => ({
	attackStart: ({}) => dispatch<IAttackStartAction>(AppActions.attackStart({})),
	// changeLanguage: (params: ISetLanguageRequestPayload) =>
	// 	dispatch<ISetLanguageRequestAction>(ConfigActions.setLanguageRequest({ language: params.language })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
