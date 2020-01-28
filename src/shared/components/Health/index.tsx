import React from 'react';
import { ProgressBar, ProgressBarProps } from 'react-bootstrap';

import { IDummyProps } from './types';

const healthMap = (health: number, maxHealth = 100): ProgressBarProps['variant'] => {
	let variant: ProgressBarProps['variant'] = undefined;

	if (health > 75) variant = 'success';
	else if (health > 50) variant = 'info';
	else if (health > 20) variant = 'warning';
	else if (health >= 0) variant = 'danger';

	return variant;
};

const Health = (props: IDummyProps) => {
	const { health, min = 0, max = 100 } = props;
	return (
		<React.Fragment>
			<div className="health-container my-3">
				<ProgressBar
					variant={healthMap(health)}
					animated={!!health}
					now={health}
					label={`${health}%`}
					min={min}
					max={max}
				/>
			</div>
		</React.Fragment>
	);
};

export default Health;
