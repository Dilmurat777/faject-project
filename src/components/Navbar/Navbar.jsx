import AnchorLink from 'react-anchor-link-smooth-scroll/lib/anchor-link.js';
import Logo from '../../assets/LogoSVG.jsx';
import { useTranslation } from 'react-i18next';
import SocialLinksNav from './SocialLinksNav';
import s from './Navbar.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ nav, setNav }) => {
  const { t } = useTranslation();
  return (
    <div className={s.wrapperNavbar}>
     {nav && <button className={s.menuBtn} onClick={() => setNav(false)}>
        <AiOutlineClose size={25} style={{ color: 'black' }} />
      </button>}
      <div className={nav ? [s.active, s.modal__bg].join(' ') : ''} onClick={()=>setNav(false)}></div>
      <div
        className={nav ? [s.headerMenu, s.active].join(' ') : [s.headerMenu]}
        onClick={() => setNav(false)}>
        <div className={s.navBar}>
          <AnchorLink href="#home">
            <span className={s.menuLogo}>
              <Logo />
            </span>
          </AnchorLink>

          <div className={s.headerAnchor}>
            <AnchorLink href="#portfolio">
              <div className={s.link}>{t('header.nav-text1')}</div>
            </AnchorLink>
          </div>
          <div className={s.headerAnchor}>
            <AnchorLink href="#prices">
              <div className={s.link}>{t('header.nav-text2')}</div>
            </AnchorLink>
          </div>
          <div className={s.headerAnchor}>
            <AnchorLink href="#about">
              <div className={s.link}>{t('header.nav-text3')}</div>
            </AnchorLink>
          </div>
          <div className={s.headerAnchor}>
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
  );
};

export default Navbar;
