import React from 'react';

import { IDummyProps } from './types';

const view = (props: IDummyProps) => {
	const { ModalComponent } = props;
	return (
		<div className={'modal-container row justify-content-center'}>
			{/* <Toast onClose={onClose} show={show} delay={4500} autohide> */}
			<ModalComponent {...props} />
			{/* </Toast> */}
		</div>
	);
};

export default view;
