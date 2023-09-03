import React, { useEffect, useRef, useState } from 'react';
import s from "./Counter.module.scss";
import CounterProvider from "./CounterProvider/CounterProvider.jsx";
import CounterItem from "./CounterItem/CounterItem.jsx";
import { useTranslation } from 'react-i18next';

const Counter = () => {
    const {t, i18n } = useTranslation()
    const [counter, setCounter] = useState({
        visitors: 0,
        proj: 0,
        prof: 0,
    });

    const data = [
        { item: counter.proj, symbol: '+', text: `${t('counter.text1')}`, className: s.projects },
        {
            item: counter.visitors,
            symbol: '>',
            text: `${t('counter.text2')}`,
            className: s.visitors
        },
        { item: counter.prof, symbol: '+', text: `${t('counter.text3')}`, className: s.profs }
    ]



    return (
       <section className={s.counterSection}>
         <CounterProvider counter={counter} setCounter={setCounter}>
            <div className={s.counter}>
                <div className={s.container}>
                    {data.map((item, index) => (
                        <CounterItem
                            symbol={item.symbol}
                            item={item.item}
                            className={item.className}
                            text={item.text}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </CounterProvider>
       </section>
    );
};
export default Counter;