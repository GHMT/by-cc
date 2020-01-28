import React from 'react';
import { Button } from 'react-bootstrap';

import { IDummyProps } from './types';
import Player from 'shared/components/Player';

const view = (props: IDummyProps) => {
	const { players, attacking, modal, winner, handleAttack, handlePlayAgain } = props;
	return (
		<div className="app-container mt-3">
			<div className="row mb-3 mt-5 mt-md-0">
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
			<div className="row justify-content-around">
				{players.map((player, index) => (
					<div
						key={index}
						className="player-container col-sm-12 col-md-5 pb-3 mb-3 border border-success"
						style={player.health <= 0 ? { opacity: 0.2 } : {}}
					>
						<Player player={player} attacking={attacking} />
					</div>
				))}
			</div>
		</div>
	);
};

export default view;
