import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import View from './view';
import { ISmartProps, IStateToPropsMap, IDispatchToPropsMap } from './types';
import { IAppStore } from 'core/store/reducers';
import AppActions from 'core/store/reducers/AppState/action-creators';
import ModalComponents from 'shared/components/Modal';
import { IModalHideAction } from 'core/store/reducers/AppState/types/actions';

const ModalContainer = (props: ISmartProps) => {
	const { modal, winner, player, popupTime, modalHide } = props;

	const handleClose = () => modalHide({});

	return (
		<React.Fragment>
			{modal && (
				<View
					{...props}
					ModalComponent={ModalComponents[modal].component}
					show={!!modal}
					onClose={handleClose}
					win={(winner && winner.name) === player.name}
					delay={popupTime}
				/>
			)}
		</React.Fragment>
	);
};

const mapStateToProps: IStateToPropsMap = (state: IAppStore) => ({
	// App State
	attacking: state.app.attacking,
	winner: state.app.winner,
	players: state.app.players,
	modal: state.app.modal,
	lastDamagedPlayers: state.app.lastDamagedPlayers,
	// Config State
	popupTime: state.config.popupTime,
	player: state.config.player,
	enemies: state.config.enemies,
});

const mapDispatchToProps: IDispatchToPropsMap = (dispatch: Dispatch) => ({
	modalHide: () => dispatch<IModalHideAction>(AppActions.modalHide({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
