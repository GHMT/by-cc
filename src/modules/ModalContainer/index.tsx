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
	const { modal, modalHide } = props;

	const handleClose = () => modalHide({});

	return (
		<React.Fragment>
			{modal && <View ModalComponent={ModalComponents[modal].component} show={!!modal} onClose={handleClose} />}
		</React.Fragment>
	);
};

const mapStateToProps: IStateToPropsMap = (state: IAppStore) => ({
	// App State
	attacking: state.app.attacking,
	winner: state.app.winner,
	players: state.app.players,
	modal: state.app.modal,
	//
});

const mapDispatchToProps: IDispatchToPropsMap = (dispatch: Dispatch) => ({
	modalHide: () => dispatch<IModalHideAction>(AppActions.modalHide({})),
	// attackStart: () => dispatch<IAttackStartAction>(AppActions.attackStart({})),
	// attackFinish: (params: IAttackFinishPayload) => {
	// 	return dispatch<IAttackFinishAction>(AppActions.attackFinish({ players: params.players }));
	// },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
