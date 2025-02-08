import React from "react";
import "./style.scss";

//import { pathImages } from "src/assets/";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import CraftItem from "../CraftItem";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Main = () => {
	const [current, setCurrent] = React.useState("one");
	const defaultPrice = 20;

	return (
		<main className="main">
			<div className="craft">
				<div className="container">
					<div className="craft__inner">
						<div className="craft__left">
							<h1 className="craft__title mt-10">Соберите бургер</h1>
							<div style={{ display: "flex" }} className="mt-5">
								<Tab
									value="one"
									active={current === "one"}
									onClick={() => setCurrent("one")}
								>
									Начинка
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
									Булки
								</Tab>
							</div>


							<div className="craft-wrapper craft-overflow">
								<h2 className="craft__subtitle mt-10">Булки</h2>

								<ul className="craft__list mt-6" >
									<CraftItem price={defaultPrice} src="src/assets/images/img-1.png" name="Краторная булка N-200i" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-2.png" name="Флюоресцентная булка R2-D3" />
								</ul>
								<h2 className="craft__subtitle mt-10">Соусы</h2>

								<ul className="craft__list mt-6" >
									<CraftItem price={defaultPrice} src="src/assets/images/img-3.png" name="Соус Spicy-X" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-4.png" name="Соус фирменный Space Sauce" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-5.png" name="Соус фирменный Space Sauce" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-6.png" name="Соус фирменный Space Sauce" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-7.png" name="Соус фирменный Space Sauce" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-8.png" name="Соус фирменный Space Sauce" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-9.png" name="Соус фирменный Space Sauce" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-10.png" name="Соус фирменный Space Sauce" />
									<CraftItem price={defaultPrice} src="src/assets/images/img-11.png" name="Соус фирменный Space Sauce" />

								</ul>

							</div>
						</div>

						<div className="craft_right">

							<div className="craftbar mt-25 pl-4 pr-4" >

								<div
									//style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'auto', height: '656px' }}
									className="craft-basket craft-overflow"
								>
									<ConstructorElement
										type="top"
										isLocked={true}
										text="Краторная булка N-200i (верх)"
										price={200}
										thumbnail={"src/assets/images/img-3.png"}
									/>
									<ConstructorElement
										text="Соус традиционный галактический"
										price={50}
										thumbnail={"src/assets/images/img-5.png"}
									/>
									<ConstructorElement
										type="bottom"
										isLocked={true}
										text="Мясо бессмертных моллюсков Protostomia"
										price={defaultPrice}
										thumbnail={"src/assets/images/img-12.png"}
									/>
									<ConstructorElement
										type="bottom"
										isLocked={true}
										text="Плоды Фалленианского дерева"
										price={200}
										thumbnail={"src/assets/images/img-7.png"}
									/>
									<ConstructorElement
										type="bottom"
										isLocked={true}
										text="Хрустящие минеральные кольца"
										price={200}
										thumbnail={"src/assets/images/img-9.png"}
									/>
									<ConstructorElement
										type="bottom"
										isLocked={true}
										text="Хрустящие минеральные кольца"
										price={200}
										thumbnail={"src/assets/images/img-9.png"}
									/>
									<ConstructorElement
										type="bottom"
										isLocked={true}
										text="Краторная булка N-200i (низ)"
										price={200}
										thumbnail={"src/assets/images/img-3.png"}
									/>
									<ConstructorElement
										type="bottom"
										isLocked={true}
										text="Краторная булка N-200i (низ)"
										price={200}
										thumbnail={"src/assets/images/img-3.png"}
										extraClass="dragable"
									/>

								</div>

								<div className="craftbar__order mt-10" style={{ display: "flex", justifyContent: "flex-end", columnGap: "40px" }}>
									<div className="craftbar__order-sum text_type_main-large" style={{ display: "flex", alignItems: "center", columnGap: "8px", fontSize: "" }}>
										610
										<CurrencyIcon type="primary" />
									</div>
									<Button htmlType="button" type="primary" size="medium">
										Нажми на меня
									</Button>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
