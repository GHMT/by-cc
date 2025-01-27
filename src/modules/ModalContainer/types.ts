import { Dispatch } from 'redux';

import { IAppStore } from 'core/store/reducers';
import { IAppState } from 'core/store/reducers/AppState/types/state';
import { IConfigState } from 'core/store/reducers/ConfigState/types/state';
import { IModalComponents } from 'shared/components/Modal';
import { IModalHideAction } from 'core/store/reducers/AppState/types/actions';
import { IModalHidePayload } from 'core/store/reducers/AppState/types/action-payloads';
import { IDummyProps as IModalInfoProps } from 'shared/components/Modal/components/ModalInfo/types';
import { IDummyProps as IModalGameEndsProps } from 'shared/components/Modal/components/ModalGameEnds/types';

// Auxiliar types
type IStateToProps = IAppState & IConfigState; /* Add other states in case of needed in props */

interface IDispatchersProps {
	modalHide(params: IModalHidePayload): IModalHideAction;
}

// Dispatch and State to props map type
export type IStateToPropsMap = (state: IAppStore) => IStateToProps;
export type IDispatchToPropsMap = (dispatch: Dispatch) => IDispatchersProps;

// Dummy and Smart shared props
interface ISharedOwnProps {
	// Custom props shared between smart and dummy
}

type ISharedExternalProps = {}; // External libraries props shared between smart and dummy

type ISharedProps = ISharedOwnProps & ISharedExternalProps;

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
export type IDummyProps = IDummyOwnProps &
	ISmartOwnStateToDummyProps &
	ISharedProps &
	IHandlers &
	IModalInfoProps &
	IModalGameEndsProps;

interface IDummyOwnProps {
	// Props needed only by the dummy component
	ModalComponent: IModalComponents['component'];
}

// Types for event handlings
export interface IHandlers {}
