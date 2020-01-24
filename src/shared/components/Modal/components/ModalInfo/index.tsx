import React from 'react';
import { Toast } from 'react-bootstrap';

import { IDummyProps } from '../types';
// import Player from 'shared/components/Player';

const ModalInfo = (props: IDummyProps) => {
	// const { onClose, show, autohide, delay } = props;
	return (
		<React.Fragment>
			{/* <Toast onClose={onClose} show={show} delay={3000} autohide={autohide}> */}
			<Toast.Header>
				{/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
				<strong className="mr-auto">Bootstrap</strong>
				<small>11 mins ago</small>
			</Toast.Header>
			<Toast.Body>Woohoo, you&lsquo;re reading this text in a Toast!</Toast.Body>
			{/* </Toast> */}
		</React.Fragment>
	);
};

export default ModalInfo;
