import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import View from './view';
import { ISmartProps, IStateToPropsMap, IDispatchToPropsMap } from './types';
import { IAppStore } from 'core/store/reducers';
import { PlayerAdapterSingleton, Player, IPlayer } from 'core/domain/Player';
import AppActions from 'core/store/reducers/AppState/action-creators';
import { IAttackStartAction, IAttackFinishAction } from 'core/store/reducers/AppState/types/actions';
import { Dispatch } from 'redux';
import { rollDices } from 'shared/utils/game-algorithm';
import { IAttackFinishPayload } from 'core/store/reducers/AppState/types/action-payloads';

const AppContainer = (props: ISmartProps) => {
	const { players, attacking, winner, attackStart, attackFinish } = props;

	const [playersClasses, setPlayersClasses] = useState<Player[]>([]);

	useEffect(() => {
		// Transformed in this way due to: https://stackoverflow.com/questions/51002940/javascript-typescript-new-class-instance-inside-array-prototype-map-function
		const playersCls: Player[] = [];
		players.forEach(iPlayer => playersCls.push(PlayerAdapterSingleton.adapt(iPlayer)));

		setPlayersClasses(playersCls);
		console.log('useEffect players');
	}, [players]);

	useEffect(() => {
		if (attacking) {
			console.log('attacking!');
			// const result = player.rollDices();
			// setDicesResult(result)
			rollDices(playersClasses);
			// let ply: IPlayer[] = [];
			// ply = playersClasses.map(playerCls => PlayerAdapterSingleton.adaptBack(playerCls));
			// setTimeout(() => {
			attackFinish({ players: playersClasses.map(playerCls => PlayerAdapterSingleton.adaptBack(playerCls)) });
			// }, 3000);
		}

		console.log('useEffect attacking');
	}, [attackFinish, attacking, playersClasses]);

	const handleAttack: React.MouseEventHandler<HTMLButtonElement> = () => attackStart({});

	return <View players={playersClasses} attacking={attacking} winner={winner} handleAttack={handleAttack} />;
};

const mapStateToProps: IStateToPropsMap = (state: IAppStore) => ({
	// App State
	attacking: state.app.attacking,
	winner: state.app.winner,
	players: state.app.players,
	//
});

const mapDispatchToProps: IDispatchToPropsMap = (dispatch: Dispatch) => ({
	attackStart: () => dispatch<IAttackStartAction>(AppActions.attackStart({})),
	attackFinish: (params: IAttackFinishPayload) => {
		return dispatch<IAttackFinishAction>(AppActions.attackFinish({ players: params.players }));
	},

	// changeLanguage: (params: ISetLanguageRequestPayload) =>
	// 	dispatch<ISetLanguageRequestAction>(ConfigActions.setLanguageRequest({ language: params.language })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
