import './style.scss'
import React from 'react';


const Link = (props) => {
	return (
		<a href="#" className={`header__link ${props.className}`}>
			{props.children}
			{props.text}
		</a>
	);
}

export default Link;