import s from './Footer.module.scss';
import Instagram from '../../assets/SocialImages/Instagram.jsx';
import Telegram from '../../assets/SocialImages/Telegram.jsx';
import WhatsApp from '../../assets/SocialImages/WhatsApp.jsx';
import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.footerItems}>

          
            <div className={`${s.languages} ${s.div1}`}>
              <Language />
            </div>

       

          <div className={`${s.contacts} ${s.div2}`}>
            <p className={s.contact__text}>{t('footer.text1')}</p>
            <div className={s.links}>
              <a href="https://www.instagram.com/faject/" target='_blank' className={s.link}>
                <Instagram />
              </a>
              <a href="https://t.me/faject_studio" target='_blank' className={s.link}>
                <Telegram />
              </a>
              <a  href="https://wa.me/998990277860" target='_blank' className={s.link}>
                <WhatsApp />
              </a>
            </div>
          </div>

          <Link to={'/policy'}>
            <div className={s.about}>
              <p> {t('footer.text2')}</p>
              <p> {t('footer.text3')}</p>
              <div>©2018—2023 Faject</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
