import React, { useState } from "react";
import AppHeader from "../Header";
import BurgerIngredients from "../Main/BurgerIngredients";
import BurgerConstructor from "../Main/BurgerConstructor";
import MyModal from "../Modals/MyModal";
import OrderDetails from "../Modals/OrderDetails/orderDetails.jsx";
import IngredientDetails from "../Modals/IngredientsDetails/IngredientDetails.jsx";
import styles from "../../styles/main.module.css";
import style from "./style.module.css";
import { ingredientsData } from "../../data/ingredients.js";

const App = () => {
	const [modal, setModal] = useState(false);
	const [selectedIngredient, setSelectedIngredient] = useState(null);
	const [orderModal, setOrderModal] = useState(false);

	const openIngredientDetails = (ingredient) => {
		setSelectedIngredient(ingredient);
		setModal(true);
	};

	const closeModals = () => {
		setSelectedIngredient(null);
		setModal(false);
		setOrderModal(false);
	};

	return (
		<>
			<div className={style.craft}>
				<AppHeader />
				<div className={`${style.craftInner} ${style.mainBlockContainer} ${styles.container}`}>
					<BurgerIngredients ingredients={ingredientsData} openIngredientDetails={openIngredientDetails} />
					<BurgerConstructor ingredients={ingredientsData} setOrderModal={setOrderModal} />
				</div>

				{/* Модальное окно для деталей ингредиента */}
				{modal && (
					<MyModal visible={modal} setVisible={closeModals}>
						<IngredientDetails ingredient={selectedIngredient} onClose={closeModals} />
					</MyModal>
				)}

				{/* Модальное окно для оформления заказа */}
				{orderModal && (
					<MyModal visible={orderModal} setVisible={closeModals}>
						<OrderDetails onClose={closeModals} />
					</MyModal>
				)}
			</div>
		</>
	);
};

export default App;
