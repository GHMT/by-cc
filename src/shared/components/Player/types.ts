import { Player } from 'core/domain/Player';

// Dummy and Smart shared props
interface ISharedOwnProps {
	// Custom props shared between smart and dummy
	player: Player;
}

type ISharedExternalProps = {}; // External libraries props shared between smart and dummy

type ISharedProps = ISharedOwnProps & ISharedExternalProps;

// Smart Component types
export type ISmartProps = ISmartOwnProps & ISharedProps;
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
}

// Types for event handlings
export interface IHandlers {}
