import React from 'react';
import { Image } from 'react-bootstrap';

import { IDummyProps } from './types';
import Dices from 'shared/components/Dices';
import Health from 'shared/components/Health';

const view = (props: IDummyProps) => {
	const { player, attacking } = props;
	return (
		<React.Fragment>
			<Health health={player.health} />
			<Image src={player.avatar} roundedCircle />
			<Dices dices={player.dices} isRolling={attacking} />
		</React.Fragment>
	);
};

export default view;
