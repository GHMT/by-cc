import React, { useState } from 'react';
import View from './view';
import { ISmartProps } from './types';

const Player = (props: ISmartProps) => {
	const { player } = props;

	// const [customId, setCustomId] = useState<IDummyProps['customId']>(null)

	// const handlecustomId = (id: IDummyProps['customId']) => {
	//     setCustomId(id);
	// }

	return <View player={player} />;
};

export default Player;
