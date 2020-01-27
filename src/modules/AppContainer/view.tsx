import React from 'react';
import { Button } from 'react-bootstrap';

import { IDummyProps } from './types';
import Player from 'shared/components/Player';

const view = (props: IDummyProps) => {
	const { players, attacking, modal, winner, handleAttack, handlePlayAgain } = props;
	return (
		<React.Fragment>
			<div className="row">
				{players.map((player, index) => (
					<div key={index} className="col-6">
						<Player player={player} attacking={attacking} />
					</div>
				))}
			</div>
			{winner ? (
				<Button variant="primary" onClick={handlePlayAgain}>
					PLAY AGAIN!
				</Button>
			) : (
				<Button variant="primary" disabled={attacking || !!modal || !!winner} onClick={handleAttack}>
					ATTACK!
				</Button>
			)}
		</React.Fragment>
	);
};

export default view;
