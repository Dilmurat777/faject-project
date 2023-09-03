import LogoSVG from '../../assets/LogoSVG.jsx';
import { Link, useMatch } from 'react-router-dom';
import Language from '../Language/Language.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll/lib/anchor-link.js';
import { useTranslation } from 'react-i18next';
import BookForm from '../BookForm/BookForm';

import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

import s from './Header.module.scss';
import PopupButton from '../Popup/PopupButton/PopupButton.jsx';
import Navbar from '../Navbar/Navbar.jsx';

const Header = ({ showPopupButton = true }) => {
  const match = useMatch('policy');
  const isPolicy = !match;

  const { t } = useTranslation();
  const [nav, setNav] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop
    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }

  function handleNavClick() {
    setNav(!nav);
  }

  return (
   
      <section className={s.sectionHeader}>
        <div className={s.container}>
          <Navbar nav={nav} setNav={setNav} />
          <div className={s.header}>
            <div className={s.left}>
              <Link to="/" href="#home">
                <span className={s.headerLogo}>
                  <LogoSVG />
                </span>
              </Link>
              {isPolicy && (
                <>
                  <div className={s.headerAnchor}>
                    <AnchorLink href="#portfolio">
                      <div className={s.link}>{t('header.nav-text1')}</div>
                    </AnchorLink>
                  </div>
                  <div className={s.headerAnchor}>
                    <AnchorLink href="#about">
                      <div className={s.link}>{t('header.nav-text3')}</div>
                    </AnchorLink>
                  </div>
                </>
              )}
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
              {!nav && <button onClick={handleNavClick} className={s.menuBtn}>
                <AiOutlineMenu size={25} />
              </button>}
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Header;
