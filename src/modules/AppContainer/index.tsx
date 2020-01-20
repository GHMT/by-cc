import React, { useState } from 'react';
import { connect } from 'react-redux';

import View from './view';
import { ISmartProps, IStateToPropsMap } from './types';
import { IAppStore } from 'core/store/reducers';
import { PlayerAdapterSingleton, Player } from 'core/domain/Player';

const AppContainer = (props: ISmartProps) => {
	const { players } = props;

	// const [customId, setCustomId] = useState<IDummyProps['customId']>(null)

	// const handlecustomId = (id: IDummyProps['customId']) => {
	//     setCustomId(id);
	// }
	const playerClasses: Player[] = [];
	players.forEach(iPlayer => playerClasses.push(PlayerAdapterSingleton.adapt(iPlayer)));

	return <View players={playerClasses} />;
};

const mapStateToProps: IStateToPropsMap = (state: IAppStore) => ({
	// App State
	attacking: state.app.attacking,
	winner: state.app.winner,
	players: state.app.players,
	//
});

// const mapDispatchToProps: IDispatchToPropsMap = (dispatch: Dispatch) => ({
// 	getAlarms: ({}) => dispatch<IGetAlarmsRequestAction>(AlarmsActions.getAlarmsRequest({})),
// 	changeLanguage: (params: ISetLanguageRequestPayload) =>
// 		dispatch<ISetLanguageRequestAction>(ConfigActions.setLanguageRequest({ language: params.language })),
// });

export default connect(mapStateToProps)(AppContainer);
