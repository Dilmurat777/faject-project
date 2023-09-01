import LogoSVG from '../../assets/LogoSVG.jsx';
import Logo from '../../assets/LogoSVG.jsx';
import { Link } from 'react-router-dom';
import Language from '../Language/Language.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll/lib/anchor-link.js';
import { useTranslation } from 'react-i18next';
import BookForm from '../BookForm/BookForm';
import PopupButton from '../Popup/PopupButton';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import SocialLinksNav from './SocialLinksNav.jsx';
import s from './Header.module.scss';

const Header = ({ showPopupButton = true }) => {
  const { t, i18n } = useTranslation();

  const [nav, setNav] = useState(false);

  return (
    <div className={s.sectionHeader}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.left}>
            <Link to={'/'}>
                <span className={s.headerLogo}>
                  <LogoSVG />
                </span>
            </Link>

            <div
              className={nav ? [s.headerMenu, s.active].join(' ') : [s.headerMenu]}
              onClick={() => setNav(false)}>
              <div className={s.navBar}>
                <AnchorLink href="#home">
                  <span className={s.menuLogo}>
                    <Logo />
                  </span>
                </AnchorLink>

                <div className={s.anchor}>
                  <AnchorLink href="#portfolio">
                    <div className={s.link}>{t('header.nav-text1')}</div>
                  </AnchorLink>
                </div>
                <div className={`${s.anchor} ${s.headerAnchor}`}>
                  <AnchorLink href="#prices">
                    <div className={s.link}>{t('header.nav-text2')}</div>
                  </AnchorLink>
                </div>
                <div className={s.anchor}>
                  <AnchorLink href="#about">
                    <div className={s.link}>{t('header.nav-text3')}</div>
                  </AnchorLink>
                </div>
                <div className={`${s.anchor} ${s.headerAnchor}`}>
                  <AnchorLink href="#footer">
                    <div className={s.link}>{t('header.nav-text4')}</div>
                  </AnchorLink>
                </div>
              </div>
              <div>
                <SocialLinksNav />
              </div>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.languageSelect}>
              <Language />
            </div>
            {showPopupButton && (
              <PopupButton className={s.button} content={BookForm}>
                {t('header.btn-text')}
              </PopupButton>
            )}
            <div onClick={() => setNav(!nav)} className={s.menuBtn}>
              {nav ? (
                <AiOutlineClose size={25} style={{ color: 'black'}} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
