import './style.scss';
import React from 'react';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Nav from '../Nav';

const NavBar = () => {
	return (
		<div className="header__navbar">
			<Nav />
			<Logo className='logo' />
		</div>
	);
}

export default NavBar;
