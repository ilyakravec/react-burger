import React from 'react';
import cl from './style.module.scss'
import cls from '../MyModal.module.scss';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = ({ onClose }) => {

	return (
		<div className={[cl.orderDetails].join(' ')}>
			<div className={`${cl.orderDetailsContent} pt-30 pb-30 pr-25 pl-25`}>

				<div className={`${cls.closeWrapper}`} onClick={onClose}>
					<CloseIcon type="primary" />
				</div>

				<p className={`${cl.orderDetailsOrder} text text_type_digits-large`}>
					034536
				</p>

				<p className={`${cl.orderDetailsId} mt-8 text text_type_main-medium`}>
					идентификатор заказа
				</p>

				<img src="src/assets/images/condition-accepted.png" alt="" className={`${cl.orderDetailsCondition} mt-15`} />

				<p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
				<p className="text text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
			</div>
		</div >
	);
}

export default OrderDetails;