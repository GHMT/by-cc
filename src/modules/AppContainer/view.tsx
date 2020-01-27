import React from 'react';
import { Button } from 'react-bootstrap';

import { IDummyProps } from './types';
import Player from 'shared/components/Player';

const view = (props: IDummyProps) => {
	const { players, attacking, modal, winner, handleAttack, handlePlayAgain } = props;
	return (
		<React.Fragment>
			<div className="row mb-5">
				{winner ? (
					<Button variant="primary" onClick={handlePlayAgain}>
						PLAY AGAIN!
					</Button>
				) : (
					<Button variant="primary" disabled={attacking || !!modal || !!winner} onClick={handleAttack}>
						ATTACK!
					</Button>
				)}
			</div>
			<div className="row justify-content-between">
				{players.map((player, index) => (
					<div key={index} className="col-sm-12 col-md-5 pb-3 mb-3 player-container border border-success">
						<Player player={player} attacking={attacking} />
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default view;
