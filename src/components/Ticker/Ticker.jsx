import s from './Ticker.module.scss'
import Marquee from "react-fast-marquee";
import { useTranslation } from 'react-i18next';

const Ticker = () => {
    const {t, i18n } = useTranslation()
    return (
        <section className={s.ticker}>
            <div className={s.wrapper}>
                <Marquee direction="left" speed={100}>
                    <div className={s.tickerItemWhite}>{t('ticker.text1')}</div>
                    <div className={s.tickerItem}>{t('ticker.text2')}</div>
                    <div className={s.tickerItemWhite}>SMM</div>
                    <div className={s.tickerItem}>SEO</div>
                    <div className={s.tickerItemWhite}>{t('ticker.text3')}</div>
                    <div className={s.tickerItem}>{t('ticker.text4')}</div>
                </Marquee>
            </div>
        </section>
    );
};

export default Ticker;