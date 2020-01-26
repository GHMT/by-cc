import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import View from './view';
import { ISmartProps, IStateToPropsMap, IDispatchToPropsMap } from './types';
import { IAppStore } from 'core/store/reducers';
import { PlayerAdapterSingleton, Player } from 'core/domain/Player';
import AppActions from 'core/store/reducers/AppState/action-creators';
import { IAttackStartAction, IAttackFinishAction, IPlayAgainAction } from 'core/store/reducers/AppState/types/actions';
import { Dispatch } from 'redux';
import { attack, IDamagedPlayer, getWinner } from 'shared/utils/game-algorithm';
import { IAttackFinishPayload } from 'core/store/reducers/AppState/types/action-payloads';
import { ModalTypes } from 'shared/components/Modal';

const AppContainer = (props: ISmartProps) => {
	const { players, attacking, winner, modal, attackStart, attackFinish, playAgain } = props;
	const [playersClasses, setPlayersClasses] = useState<Player[]>([]);

	useEffect(() => {
		// Transformed in this way due to: https://stackoverflow.com/questions/51002940/javascript-typescript-new-class-instance-inside-array-prototype-map-function
		const playersCls: Player[] = [];
		players.forEach(iPlayer => playersCls.push(PlayerAdapterSingleton.adapt(iPlayer)));

		setPlayersClasses(playersCls);
		console.log('useEffect players');
	}, [players]);

	useEffect(() => {
		console.log('useEffect attacking');
		if (attacking) {
			console.log('attacking!');
			const damagedPlayers = attack(playersClasses);
			const winner = getWinner(playersClasses);
			console.log('winner: ', winner);
			const modal = winner ? ModalTypes.GAME_ENDS : ModalTypes.DAMAGE_INFO;
			setTimeout(() => {
				attackFinish({
					players: playersClasses.map(playerCls => PlayerAdapterSingleton.adaptBack(playerCls)),
					modal,
					winner: winner ? PlayerAdapterSingleton.adaptBack(winner) : winner,
					lastDamagedPlayers: damagedPlayers,
				});
			}, 2000); // To emulate dices rolling time
		}
	}, [attackFinish, attacking, playersClasses]);

	const handleAttack: React.MouseEventHandler<HTMLButtonElement> = () => attackStart({});
	const handlePlayAgain: React.MouseEventHandler<HTMLButtonElement> = () => playAgain({});

	return (
		<View
			players={playersClasses}
			attacking={attacking}
			winner={winner}
			modal={modal}
			handleAttack={handleAttack}
			handlePlayAgain={handlePlayAgain}
		/>
	);
};

const mapStateToProps: IStateToPropsMap = (state: IAppStore) => ({
	// App State
	attacking: state.app.attacking,
	winner: state.app.winner,
	players: state.app.players,
	modal: state.app.modal,
	lastDamagedPlayers: state.app.lastDamagedPlayers, // TODO: delete if don't used
	//
});

const mapDispatchToProps: IDispatchToPropsMap = (dispatch: Dispatch) => ({
	playAgain: () => dispatch<IPlayAgainAction>(AppActions.playAgain({})),
	attackStart: () => dispatch<IAttackStartAction>(AppActions.attackStart({})),
	attackFinish: (params: IAttackFinishPayload) => {
		return dispatch<IAttackFinishAction>(
			AppActions.attackFinish({
				players: params.players,
				modal: params.modal,
				lastDamagedPlayers: params.lastDamagedPlayers,
				winner: params.winner,
			}),
		);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
