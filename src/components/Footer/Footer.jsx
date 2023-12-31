import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import s from './Footer.module.scss';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={s.footer} id={'footer'}>
      <div className={s.container}>
        <div className={s.footerItems}>
          <div className={`${s.languages} ${s.div4}`}>
            <Language />
          </div>

         <div className={`${s.div3}`}>
         <Link to={'/policy'}>
            <div className={s.about}>
              <p> {t('footer.text2')}</p>
              <p> {t('footer.text3')}</p>
              <div>©2018—2023 Faject</div>
            </div>
          </Link>
         </div>

         <SocialLinks/>

          <div className={`${s.footerAddress} ${s.div1}`}>
            <p className={s.footerText}>
            {t("footer.number")} <a href="tel:+998990277860" target='_blank'>+998 99 027 78 60</a>
            </p>
            <p className={s.footerText}>{t("footer.address")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
