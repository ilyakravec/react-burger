import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import './style.scss';
import React from 'react';


const CraftItem = ({ price, src, name }) => {
	return (

		<li className="craft__list-item">

			<div className="craft__list-img">
				<img src={src} alt="" />
			</div>

			<div className="craft__list-price mt-1">
				{price}
				<CurrencyIcon type="primary" />
			</div>

			<div className="craft__list-name mt-4">{name}</div>
		</li>

	);
}

export default CraftItem;