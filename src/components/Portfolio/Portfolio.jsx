import React from "react";
import Gallery from "./Gallery/Gallery";
import { useTranslation } from 'react-i18next';
import s from './Portfolio.module.scss'

const Portfolio = () => {
	const {t, i18n } = useTranslation()
	return (
		<section className={s.portfolio}>
			<div className={s.container}>
				<h2 className={s.title}>{t("portfolio.title")}</h2>
				<div>
					<Gallery />
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
