
import React, { useState, useEffect } from 'react';
import styles from "./style.module.scss";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import CraftItem from "../CraftItem";

// import { ingredientsData } from '../../data/ingredients.js';

const BurgerIngredients = ({ ingredients }) => {

	const buns = ingredients.filter(item => item.type === "bun");
	const sauces = ingredients.filter(item => item.type === "sauce");
	const mains = ingredients.filter(item => item.type === "main");
	const [current, setCurrent] = useState("one");

	return (
		<div className={`${styles.craftLeft} main__block__container__column`}>
			<h1 className={`${styles.craftTitle} mt-10`}>Соберите бургер</h1>
			<div style={{ display: "flex" }} className="mt-5">
				<Tab
					value="one"
					active={current === "one"}
					onClick={() => setCurrent("one")}
				>
					Булки
				</Tab>
				<Tab
					value="two"
					active={current === "two"}
					onClick={() => setCurrent("two")}
				>
					Соусы
				</Tab>
				<Tab
					value="three"
					active={current === "three"}
					onClick={() => setCurrent("three")}
				>
					Начинка
				</Tab>
			</div>

			<div className={`${styles.craftWrapper} ${styles.craftOverflow}`}>
				{current === "one" && (
					<>
						<h2 className={`${styles.craftSubtitle} mt-10`}>Булки</h2>
						<ul className={`${styles.craftList} mt-6`}>
							{buns.map(buns =>
								<CraftItem
									key={buns._id}
									price={buns.price}
									src={buns.image}
									name={buns.name} />
							)}
						</ul>
					</>
				)}

				{current === "two" && (
					<>
						<h2 className={`${styles.craftSubtitle} mt-10`}>Соусы</h2>
						<ul className={`${styles.craftList} mt-6`}>

							{sauces.map(sauces =>
								<CraftItem
									key={sauces._id}
									price={sauces.price}
									src={sauces.image}
									name={sauces.name} />
							)}

						</ul>
					</>
				)}

				{current === "three" && (
					<>
						<h2 className={`${styles.craftSubtitle} mt-10`}>Основные ингредиенты</h2>
						<ul className={`${styles.craftList} mt-6`}>
							{mains.map(mains =>
								<CraftItem
									key={mains._id}
									price={mains.price}
									src={mains.image}
									name={mains.name} />
							)}

						</ul>
					</>
				)}
			</div>
		</div>
	);
};

export default BurgerIngredients;
