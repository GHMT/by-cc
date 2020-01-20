import IAppStateActionTypes from './types/action-types';
import { actions, IAppStateActionsCreators } from './types/actions';
import { createActions } from 'reduxsauce';
// const reduxsauce = require('reduxsauce');

const { Types, Creators } = createActions<IAppStateActionTypes, IAppStateActionsCreators>(actions, { prefix: 'APP.' });

// Actions types and Action Creators (redux sauce)
export const AppTypes: IAppStateActionTypes = Types;
const AppActions: IAppStateActionsCreators = Creators;
export default AppActions;
