import React from 'react';

import { IDummyProps } from './types';

const view = (props: IDummyProps) => {
	const { ModalComponent } = props;
	return (
		<React.Fragment>
			{/* <Toast onClose={onClose} show={show} delay={4500} autohide> */}
			<ModalComponent {...props} />
			{/* </Toast> */}
		</React.Fragment>
	);
};

export default view;
