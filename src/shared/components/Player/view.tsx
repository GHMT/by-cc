import React from 'react';
// import { Accordion } from 'react-bootstrap';

import { IDummyProps } from './types';

const view = (props: IDummyProps) => {
	const { player } = props;
	return (
		<React.Fragment>
			<div>{player.name}</div>
			<div>{player.health}</div>
		</React.Fragment>
	);
};

export default view;
