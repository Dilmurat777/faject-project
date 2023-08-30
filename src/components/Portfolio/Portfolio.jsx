import React from "react";
import Gallery from "./Gallery/Gallery";
import { useTranslation } from 'react-i18next';
import s from './Portfolio.module.scss'
import portfolioAPI from "../../serviceApi/portfolio.api";
import { useEffect } from "react";

const Portfolio = () => {
	const {t, i18n } = useTranslation()

	useEffect(()=>{
		async function fetchData() {
		const response = await portfolioAPI.getAll()
  
		// console.log(response)
	}
  
		fetchData()
  
	},[])

	return (
		<section className={s.portfolio} id='portfolio'>
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
