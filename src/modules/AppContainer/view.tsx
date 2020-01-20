import React from 'react';
// import { Accordion } from 'react-bootstrap';

import { IDummyProps } from './types';

const view = (props: IDummyProps) => {
	const { players } = props;
	return (
		<React.Fragment>
			{players.map((player, index) => (
				<div key={index}>{player.health}</div>
			))}
		</React.Fragment>
	);
};

export default view;
