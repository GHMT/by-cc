import React from 'react';
import { Spinner } from 'react-bootstrap';

import { IDummyProps } from './types';
import Dice from './components/Dice';

const Dices = (props: IDummyProps) => {
	const { dices, isRolling } = props;
	return (
		<div className={'row justify-content-around'}>
			{dices.map((diceResult, index) => (
				<div key={index} className={'col-12 col-sm-4 col-md-6 col-lg-4'}>
					{isRolling ? <Spinner animation="grow" className="text-info" /> : <Dice diceResult={diceResult} />}
				</div>
			))}
		</div>
	);
};

export default Dices;
