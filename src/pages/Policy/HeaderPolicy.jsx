import s from './Header.module.scss';
import LogoSVG from '../../assets/LogoSVG.jsx';
import { Link } from 'react-router-dom';
import Language from '../../components/Language/Language';
import { useTranslation } from 'react-i18next'
import BookForm from '../../components/BookForm/BookForm';
import PopupButton from '../../components/Popup/PopupButton';


const Header = ({showPopupButton = true}) => {
	const {t, i18n } = useTranslation()
	return (
		<div className={s.sectionHeader}>
			<div className={s.container}>
			<div className={s.header}>
				<div className={s.left}>
					<Link to={'/'}>
						<LogoSVG />
					</Link>
				</div>
				<div className={s.right}>
					<div className={s.languageSelect}>
						<Language />
					</div>
					{showPopupButton && <PopupButton className={s.button} content={BookForm}>{t('header.btn-text')}</PopupButton>}
				</div>
			</div>
		</div>
		</div>
	);
};

export default Header;

