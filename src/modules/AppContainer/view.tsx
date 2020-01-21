import React from 'react';
import { Button } from 'react-bootstrap';

import { IDummyProps } from './types';

const view = (props: IDummyProps) => {
	const { players, attacking, handleAttack } = props;
	return (
		<React.Fragment>
			<div>
				{players.map((player, index) => (
					<div key={index}>{player.health}</div>
				))}
			</div>
			<Button variant="primary" disabled={attacking} onClick={handleAttack}>
				ATTACK!
			</Button>
		</React.Fragment>
	);
};

export default view;
