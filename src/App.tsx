import React from 'react';

import logo from 'assets/byhiras_logo.png';
import './App.scss';
import AppContainer from 'modules/AppContainer';
import ModalContainer from 'modules/ModalContainer';
import AppHeader from 'shared/components/AppHeader';

const App: React.FC = () => {
	return (
		<div className="App container">
			<AppHeader logo={logo} appTitle={'Battle Simulator'} />
			<h1 className="display-4 d-sm-none">Battle Simulator</h1>
			<ModalContainer />
			<AppContainer></AppContainer>
		</div>
	);
};

export default App;
