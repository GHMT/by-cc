import React from 'react';
import { Toast } from 'react-bootstrap';

import { IDummyProps } from './types';
// import Player from 'shared/components/Player';

const ModalInfo = (props: IDummyProps) => {
	const { onClose, show, lastDamagedPlayers, delay } = props;
	return (
		<React.Fragment>
			<Toast onClose={onClose} show={show} delay={delay} autohide>
				{/* <Toast.Header>
					<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
					<strong className="mr-auto">Bootstrap</strong>
					<small>Show is {show ? 'true' : 'false'}</small>
				</Toast.Header> */}
				<Toast.Body>
					{lastDamagedPlayers && lastDamagedPlayers.length ? (
						lastDamagedPlayers.map((damagedPlayer, index) => (
							<div key={index}>
								<div>
									{damagedPlayer.player.name} lost {damagedPlayer.damage} points
								</div>
							</div>
						))
					) : (
						<React.Fragment>
							<div>No players hit!</div>
						</React.Fragment>
					)}
				</Toast.Body>
			</Toast>
		</React.Fragment>
	);
};

export default ModalInfo;
