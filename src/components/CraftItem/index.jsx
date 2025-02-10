import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import './style.scss';
import React from 'react';


const CraftItem = ({ price, src, name, onClick }) => {
	return (

		<li className="craft__list-item" onClick={onClick}>

			<div className="craft__list-img">
				<div className="craft__count">
					<Counter count={1} size="default" extraClass="m-1" />
				</div>
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

CraftItem.propTypes = {
	price: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};



export default CraftItem;