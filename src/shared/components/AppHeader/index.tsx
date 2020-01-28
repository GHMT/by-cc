import React from 'react';
import { Navbar } from 'react-bootstrap';

import companyLogo from 'logo.svg';
import { IAppHeaderProps } from './types';

const AppHeader = ({ logo = companyLogo, appTitle = '', companyName = 'Code Challenge' }: IAppHeaderProps) => (
	<React.Fragment>
		<Navbar bg="info" variant="dark" sticky="top">
			<Navbar.Brand>
				<img alt="" src={logo} width="50" height="44" className="d-inline-block mr-3" />
			</Navbar.Brand>

			<div className="col d-none d-sm-flex" />
			<div className="row d-none d-sm-flex">
				<Navbar.Text className="col justify-content-end">
					<h1 className="display-5 text-white">{appTitle}</h1>
				</Navbar.Text>
			</div>
			<div className="col d-none d-sm-flex" />

			{companyName && (
				<div className="row">
					<Navbar.Text className="col">
						<div className="text-white">{companyName}</div>
					</Navbar.Text>
				</div>
			)}
		</Navbar>
	</React.Fragment>
);

export default AppHeader;
