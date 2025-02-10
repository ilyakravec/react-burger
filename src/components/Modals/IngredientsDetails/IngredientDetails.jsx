import cl from './style.module.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientDetails = ({ ingredient, onClose }) => {
	if (!ingredient) return null;

	return (
		<div className={cl.ingredientDetails}>
			<div className={`${cl.ingredientDetailsContent} pt-10 pb-15 pl-10 pr-10`}>
				<div className={cl.headerWrapper}>
					<h2 className={`${cl.headerTitle} text text_type_main-large`}>Детали ингредиента</h2>
					<div className={`${cl.closeWrapper}`} onClick={onClose}>
						<CloseIcon type="primary" />
					</div>
				</div>

				<div className={cl.imgWrapper}>
					<img src={ingredient.image} alt={ingredient.name} />
				</div>

				<p className={`${cl.name} text text_type_main-medium mt-4`}>{ingredient.name}</p>

				<ul className={`${cl.cards} mt-8 `}>
					<li className={`${cl.cardItem} text_color_inactive`}>
						<div className={`${cl.cardTitle}`}>Калории, ккал</div>
						<div className={`${cl.cardNumber} mt-2 text_type_digits-default`}>{ingredient.calories}</div>
					</li>
					<li className={`${cl.cardItem} text_color_inactive`}>
						<div className={`${cl.cardTitle}`}>Белки, г</div>
						<div className={`${cl.cardNumber} mt-2 text_type_digits-default`}>{ingredient.proteins}</div>
					</li>
					<li className={`${cl.cardItem} text_color_inactive`}>
						<div className={`${cl.cardTitle}`}>Жиры, г</div>
						<div className={`${cl.cardNumber} mt-2 text_type_digits-default`}>{ingredient.fat}</div>
					</li>
					<li className={`${cl.cardItem} text_color_inactive`}>
						<div className={`${cl.cardTitle}`}>Углеводы, г</div>
						<div className={`${cl.cardNumber} mt-2 text_type_digits-default`}>{ingredient.carbohydrates}</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default IngredientDetails;
