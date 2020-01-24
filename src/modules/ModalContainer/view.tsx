import React from 'react';
import { Toast } from 'react-bootstrap';

import { IDummyProps } from './types';

const view = (props: IDummyProps) => {
	const { onClose, show, autohide, delay, ModalComponent } = props;
	return (
		<React.Fragment>
			<Toast onClose={onClose} show={show} delay={4500} autohide>
				<ModalComponent />
			</Toast>
		</React.Fragment>
	);
};

export default view;
