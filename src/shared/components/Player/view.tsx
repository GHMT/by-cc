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
			<h3>{player.name}</h3>
			<Image src={player.avatar} roundedCircle className={'mb-2'} />
			<Dices dices={player.dices} isRolling={attacking && player.health > 0} />
		</React.Fragment>
	);
};

export default view;
