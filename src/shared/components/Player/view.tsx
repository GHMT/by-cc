import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IDummyProps } from './types';
import Dice from 'shared/components/Dice';

const view = (props: IDummyProps) => {
	const { player, attacking } = props;
	return (
		<React.Fragment>
			<div>{player.name}</div>
			<div>{player.health}</div>
			{player.dices.map((diceResult, index) => (
				<div key={index}>
					<Dice diceResult={diceResult} isRolling={attacking} />
				</div>
			))}
		</React.Fragment>
	);
};

export default view;
