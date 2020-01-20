import IConfigStateActionTypes from './types/action-types';
import { actions, IConfigStateActionsCreators } from './types/actions';
import { createActions } from 'reduxsauce';
// const reduxsauce = require('reduxsauce');

const { Types, Creators } = createActions<IConfigStateActionTypes, IConfigStateActionsCreators>(actions, {
	prefix: 'CONFIG.',
});

// Actions types and Action Creators (redux sauce)
export const ConfigTypes: IConfigStateActionTypes = Types;
const ConfigActions: IConfigStateActionsCreators = Creators;
export default ConfigActions;
