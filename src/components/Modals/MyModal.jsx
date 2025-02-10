import React, { useEffect } from "react";
import cl from "./MyModal.module.scss";

const MyModal = ({ children, visible, setVisible }) => {
	const rootClasses = [cl.myModal];

	if (visible) {
		rootClasses.push(cl.active);
	}

	// Закрытие модального окна по клику на фон
	const handleBackgroundClick = (e) => {
		if (e.target === e.currentTarget) {
			setVisible(false);
		}
	};

	// Закрытие модального окна по нажатию на ESC
	useEffect(() => {
		const handleEscPress = (e) => {
			if (e.key === "Escape") {
				setVisible(false);
			}
		};

		if (visible) {
			document.addEventListener("keydown", handleEscPress);
		}

		// Удаляем слушатель событий при размонтировании компонента
		return () => {
			document.removeEventListener("keydown", handleEscPress);
		};
	}, [visible]);

	return (
		<div className={rootClasses.join(" ")} onClick={handleBackgroundClick}>
			<div className={cl.mymodalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default MyModal;
