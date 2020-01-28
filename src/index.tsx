import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './index.css';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from 'core/store';
import IconLibrary, { Icons } from './shared/icons';

IconLibrary.add(...Icons);

ReactDOM.render(
	<Provider store={store}>
		<Suspense fallback={<div>Loading...</div>}>
			<App />
		</Suspense>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
