// import { routerMiddleware } from 'connected-react-router';
// import { createBrowserHistory, History } from 'history';
import {
	applyMiddleware,
	createStore,
	StoreEnhancer, // compose,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
// import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

// import sagas from '../api/workers';
import { createRootReducers } from './reducers';

// const hist: History = createBrowserHistory();
// const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
// const enhancers: StoreEnhancer[] = [applyMiddleware(sagaMiddleware, routerMiddleware(hist))];
const enhancers: StoreEnhancer[] = [applyMiddleware()];
// const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools;
const composeEnhancers = composeWithDevTools;
const store = createStore(createRootReducers(), composeEnhancers(...enhancers));

// sagaMiddleware.run(sagas);

// export const history = hist;
export default store;
