import React from 'react';
import { Toast } from 'react-bootstrap';

import { IDummyProps } from './types';
// import Player from 'shared/components/Player';

const ModalGameEnds = (props: IDummyProps) => {
	const { onClose, show, win } = props;
	return (
		<React.Fragment>
			<Toast onClose={onClose} show={show}>
				<Toast.Header>
					{/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
					<strong className="mr-auto">Bootstrap</strong>
				</Toast.Header>
				<Toast.Body>
					<React.Fragment>
						<div>{win ? 'YOU WIN!' : 'GAME OVER!'}</div>
					</React.Fragment>
				</Toast.Body>
			</Toast>
		</React.Fragment>
	);
};

export default ModalGameEnds;
