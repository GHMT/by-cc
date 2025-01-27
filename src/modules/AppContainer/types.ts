import { Dispatch } from 'redux';

import { Player } from 'core/domain/Player';
import { IAppStore } from 'core/store/reducers';
import { IAppState } from 'core/store/reducers/AppState/types/state';
import { IAttackStartAction, IAttackFinishAction, IPlayAgainAction } from 'core/store/reducers/AppState/types/actions';
import {
	IAttackStartPayload,
	IAttackFinishPayload,
	IPlayAgainPayload,
} from 'core/store/reducers/AppState/types/action-payloads';

// Auxiliar types
type IStateToProps = IAppState; /* Add other states in case of needed in props */

interface IDispatchersProps {
	attackStart(params: IAttackStartPayload): IAttackStartAction;
	attackFinish(params: IAttackFinishPayload): IAttackFinishAction;
	playAgain(params: IPlayAgainPayload): IPlayAgainAction;
}

// Dispatch and State to props map type
export type IStateToPropsMap = (state: IAppStore) => IStateToProps;
export type IDispatchToPropsMap = (dispatch: Dispatch) => IDispatchersProps;

// Dummy and Smart shared props
interface ISharedOwnProps {
	// Custom props shared between smart and dummy
}

type ISharedExternalProps = {}; // External libraries props shared between smart and dummy

type ISharedProps = ISharedOwnProps & ISharedExternalProps /*& IStateToProps*/;

// Smart Component types
export type ISmartProps = ISmartOwnProps & ISharedProps & IDispatchersProps & IStateToProps;
export type ISmartState = ISmartOwnState & ISmartOwnStateToDummyProps;

interface ISmartOwnProps {
	// Props to pass and be only used by smart component
}

interface ISmartOwnState {} // State to be defined and used only inside smart component (i.e: to calculate other internal states and/or dummy props)

interface ISmartOwnStateToDummyProps {
	// Smart state to be passed to dummy through its props
}

// Dummy Component types
export type IDummyProps = IDummyOwnProps & ISmartOwnStateToDummyProps & ISharedProps & IHandlers;

interface IDummyOwnProps {
	// Props needed only by the dummy component
	attacking: IAppState['attacking'];
	winner: IAppState['winner'];
	players: Player[];
	modal: IAppState['modal'];
}

// Types for event handlings
export interface IHandlers {
	handleAttack: React.MouseEventHandler<HTMLButtonElement>;
	handlePlayAgain: React.MouseEventHandler<HTMLButtonElement>;
}
