import './style.scss'
import React from 'react';

import NavBar from '../NavBar';
import Link from '../Link';

// import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Header = () => {
	return (
		<header className="header">
			<div className="header__inner">

				<NavBar />

				<button className="header__enter">
					<Link text="Личный кабинет" />
				</button>

			</div>
		</header>
	);
}

export default Header;

