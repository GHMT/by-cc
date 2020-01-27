import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from 'react-bootstrap';

import { IDummyProps, IDiceMap } from './types';

const diceMap: IDiceMap = {
	1: 'dice-one',
	2: 'dice-two',
	3: 'dice-three',
	4: 'dice-four',
	5: 'dice-five',
	6: 'dice-six',
};

const Dice = (props: IDummyProps) => {
	const { diceResult, isRolling } = props;
	return (
		<React.Fragment>
			{isRolling ? (
				<Spinner animation="grow" className="text-info" />
			) : Object.keys(diceMap).includes(diceResult.toString()) ? (
				<FontAwesomeIcon className="text-info" icon={diceMap[diceResult]} style={{ fontSize: '2em' }} />
			) : (
				<FontAwesomeIcon className="text-info" icon="dice" style={{ fontSize: '2em' }} />
			)}
		</React.Fragment>
	);
};

export default Dice;
