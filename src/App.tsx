import React from 'react';

import logo from './logo.svg';
import './App.scss';
import AppContainer from 'modules/AppContainer';
import ModalContainer from 'modules/ModalContainer';

const App: React.FC = () => {
	return (
		<div className="App">
			<ModalContainer />
			<AppContainer></AppContainer>
		</div>
	);
};

export default App;
