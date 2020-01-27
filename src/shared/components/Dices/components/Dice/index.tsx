import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IDummyProps, IDiceMap } from './types';

const diceMap: IDiceMap = {
	1: 'dice-one',
	2: 'dice-two',
	3: 'dice-three',
	4: 'dice-four',
	5: 'dice-five',
	6: 'dice-six',
};

const Dices = (props: IDummyProps) => {
	const { diceResult } = props;
	return (
		<React.Fragment>
			{Object.keys(diceMap).includes(diceResult.toString()) ? (
				<FontAwesomeIcon className="text-info" icon={diceMap[diceResult]} style={{ fontSize: '4em' }} />
			) : (
				<FontAwesomeIcon className="text-info" icon="dice" style={{ fontSize: '4em' }} />
			)}
		</React.Fragment>
	);
};

export default Dices;
