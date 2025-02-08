import React from 'react';

import AppHeader from '../Header';
import BurgerIngredients from '../Main/burgerIngredients';
import BurgerConstructor from '../Main/burgerConstructor';

// import Main from './components/Main'

import styles from '../../styles/main.module.css';
import style from './style.module.css';
import { ingredientsData } from '../../data/ingredients.js';

function App() {

	return (
		<>
			<div className={style.craft}>
				<AppHeader />
				<div className={styles.container}>
					<div className={`${style.craftInner}  ${style.mainBlockContainer}`}>
						<BurgerIngredients ingredients={ingredientsData} />
						<BurgerConstructor ingredients={ingredientsData} />
					</div>
				</div>
			</div>
		</>
	)
}

export default App;
