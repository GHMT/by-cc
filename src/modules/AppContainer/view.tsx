import React from 'react';
import { Button } from 'react-bootstrap';

import { IDummyProps } from './types';
import Player from 'shared/components/Player';

const view = (props: IDummyProps) => {
	const { players, attacking, handleAttack } = props;
	return (
		<React.Fragment>
			<div>
				{players.map((player, index) => (
					<div key={index}>
						<Player player={player} attacking={attacking} />
					</div>
				))}
			</div>
			<Button variant="primary" disabled={attacking} onClick={handleAttack}>
				ATTACK!
			</Button>
		</React.Fragment>
	);
};

export default view;
