import React from 'react';
import { Navbar } from 'react-bootstrap';

import companyLogo from 'logo.svg';
import { IAppHeaderProps } from './types';

const AppHeader = ({ logo = companyLogo, companyName = 'Front-End' }: IAppHeaderProps) => (
	<React.Fragment>
		<Navbar bg="info" variant="dark" sticky="top">
			<Navbar.Brand>
				<img alt="" src={logo} width="30" height="24" className="d-inline-block mr-3" />
			</Navbar.Brand>
			<div className="col" />
			{companyName && (
				<div className="row">
					<Navbar.Text className="col justify-content-end">
						<div className="text-white">{companyName}</div>
					</Navbar.Text>
				</div>
			)}
		</Navbar>
	</React.Fragment>
);

export default AppHeader;
