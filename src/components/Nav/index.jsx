import Link from '../Link';
import './style.scss'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

const Nav = () => {
	return (

		<div className="header__nav">
			<Link text="Конструктор" className="header__link--active">
				<BurgerIcon type="primary" />
			</Link>
			<Link text="Лента заказов" >
				<ListIcon type="secondary" />
			</Link>

		</div>

	);
}

export default Nav;