import React, { useState, useEffect } from 'react';
import View from './view';
import { ISmartProps, ISmartState } from './types';

const Player = (props: ISmartProps) => {
	const { player, attacking } = props;

	// const [dicesResult, setDicesResult] = useState<ISmartState['dicesResult']>(Array(player.dicesAmount).fill(0));

	return <View player={player} attacking={attacking} /*dicesResult={dicesResult}*/ />;
};

export default Player;
