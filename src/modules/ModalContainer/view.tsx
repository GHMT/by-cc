import React from 'react';

import { IDummyProps } from './types';

const view = (props: IDummyProps) => {
	const { ModalComponent } = props;
	return (
		<div className={'modal-container row justify-content-center mb-2'}>
			<ModalComponent {...props} />
		</div>
	);
};

export default view;
