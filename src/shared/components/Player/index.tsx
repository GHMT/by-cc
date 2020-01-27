import React from 'react';
import View from './view';
import { ISmartProps } from './types';

const Player = (props: ISmartProps) => {
	const { player, attacking } = props;

	return <View player={player} attacking={attacking} />;
};

export default Player;
