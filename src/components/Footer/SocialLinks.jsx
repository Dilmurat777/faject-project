import Instagram from '../../assets/SocialImages/Instagram.jsx';
import Telegram from '../../assets/SocialImages/Telegram.jsx';
import WhatsApp from '../../assets/SocialImages/WhatsApp.jsx';
import { useTranslation } from 'react-i18next';
import s from './Footer.module.scss';

const SocialLinks = () => {
	const {t, i18n } = useTranslation()

  return (
    <div className={`${s.footerSocial} ${s.div2}`}>
      <p className={s.footerSocialText}>{t('footer.text1')}</p>
      <div className={s.footerSocialLinks}>
        <a href="https://www.instagram.com/faject/" target="_blank" className={s.link}>
          <Instagram />
        </a>
        <a href="https://t.me/faject_studio" target="_blank" className={s.link}>
          <Telegram />
        </a>
        <a href="https://wa.me/998990277860" target="_blank" className={s.link}>
          <WhatsApp />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
