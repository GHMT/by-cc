import { Dispatch } from 'redux';

import { IAppStore } from 'core/store/reducers';
import { IDummyProps as IModalSharedProps } from '../types';

// Auxiliar types
type IStateToProps = {}; //IAppState; /* Add other states in case of needed in props */

interface IDispatchersProps {}

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
export type IDummyProps = IDummyOwnProps & ISmartOwnStateToDummyProps & ISharedProps & IHandlers & IModalSharedProps;

interface IDummyOwnProps {
	// Props needed only by the dummy component
	win: boolean;
}

// Types for event handlings
export interface IHandlers {}
