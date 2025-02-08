import React from "react";

import styles from "./style.module.css";

// import NavBar from '../NavBar';
import Nav from "../Nav";
import {
	Logo,
	ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Link from "../Link";

// import './style.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerInner}>
				<div className={styles.headerNavbar}>
					<Nav />

					<Link >
						<Logo className="logo" />
					</Link>

					<Link text="Личный кабинет">
						<ProfileIcon type="secondary" />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
