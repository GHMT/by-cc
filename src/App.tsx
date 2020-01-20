import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import PlayerComp from 'shared/components/Player';
// import Player from 'core/domain/Player';
import AppContainer from 'modules/AppContainer';

const App: React.FC = () => {
	return (
		<div className="App">
			{/* <PlayerComp player={new Player('Max', 'Avatar', 2)}></PlayerComp> */}
			<AppContainer></AppContainer>
		</div>
	);
};

export default App;
