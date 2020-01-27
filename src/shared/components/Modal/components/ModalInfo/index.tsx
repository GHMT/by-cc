import React from 'react';
import { Toast } from 'react-bootstrap';

import { IDummyProps } from './types';

const ModalInfo = (props: IDummyProps) => {
	const { onClose, show, lastDamagedPlayers, delay } = props;
	return (
		<React.Fragment>
			<Toast onClose={onClose} show={show} delay={delay} autohide className={'bg-info'}>
				<Toast.Body>
					{lastDamagedPlayers && lastDamagedPlayers.length ? (
						lastDamagedPlayers.map((damagedPlayer, index) => (
							<div key={index}>
								<div>{`${damagedPlayer.player.name} lost ${damagedPlayer.damage} point${
									damagedPlayer.damage === 1 ? '' : 's'
								}`}</div>
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
