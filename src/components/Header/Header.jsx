import s from './Header.module.scss';
import LogoSVG from '../../assets/LogoSVG.jsx';
import { Link } from 'react-router-dom';
import Language from '../Language/Language.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll/lib/anchor-link.js';
import { useTranslation } from 'react-i18next'
import BookForm from '../BookForm/BookForm';
import PopupButton from '../Popup/PopupButton';


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
					<div className={s.anchor}>
						<AnchorLink href="#portfolio">
							<div className={s.link}>{t('header.nav-text1')}</div>
						</AnchorLink>
					</div>
					<div className={s.anchor}>
						<AnchorLink href="#about">
						<div className={s.link}>{t('header.nav-text2')}</div>
						</AnchorLink>
					</div>
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

