import { combineReducers, Reducer } from 'redux';
// import { History } from 'history';
// import { connectRouter } from 'connected-react-router';

import { IAppState } from './AppState/types/state';
import { IConfigState } from './ConfigState/types/state';
// import { IRouterState } from './RouterState/types/state';

export interface IAppStore {
	app: IAppState;
	config: IConfigState;

	//   router: IRouterState; // This state is added by connected-react-router with its router middleware
}

export const createRootReducers = (): Reducer<IAppStore> =>
	combineReducers<IAppStore>({
		app: require('./AppState').reducer,
		config: require('./ConfigState').reducer,

		// router: connectRouter(history),
	});
