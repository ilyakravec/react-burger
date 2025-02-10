import React, { useMemo } from "react";
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./style.module.scss";

const BurgerConstructor = ({ ingredients, setOrderModal }) => {
	const bun = useMemo(() => ingredients.find(item => item.type === "bun"), [ingredients]);
	const notBuns = useMemo(() => ingredients.filter(item => item.type !== "bun"), [ingredients]);

	return (
		<div className={`${styles.craftRight}`}>
			<div className={`${styles.craftBasket} mt-20 ${styles.craftBasket} ${styles.craftOverflow}`}>
				<div className={styles.constructorItems}>
					<div className={styles.constructorItemsWrapper}>
						<ConstructorElement
							type="top"
							isLocked={true}
							text={bun.name}
							price={bun.price}
							thumbnail={bun.image}
						/>
					</div>

					<div className={styles.constructorList}>
						{notBuns.map((ingredient) => (
							<div key={ingredient._id} className={styles.constructorListItem}>
								<DragIcon type="primary" />
								<ConstructorElement
									text={ingredient.name}
									price={ingredient.price}
									thumbnail={ingredient.image}
								/>
							</div>
						))}
					</div>
					<div className={styles.constructorItemsWrapper}>
						<ConstructorElement
							type="bottom"
							isLocked={true}
							text={bun.name}
							price={bun.price}
							thumbnail={bun.image}
						/>
					</div>
				</div>
			</div>
			<div className={`${styles.craftbar__order} mt-10`}>
				<div className={`${styles.craft__orderSum} text_type_main-large`}>
					610
					<CurrencyIcon type="primary" />
				</div>
				<Button htmlType="button" type="primary" size="medium" onClick={() => setOrderModal(true)}>
					Оформить заказ
				</Button>
			</div>
		</div>
	);
};

export default BurgerConstructor;
