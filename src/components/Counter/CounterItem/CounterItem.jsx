import React from 'react';
import s from "../Counter.module.scss";

const CounterItem = ({item, text, symbol, className}) => {
    return (
        <div className={className}>
            <div className={s.number}>
                <span className={s.symbol}>{symbol}</span>
                {item}
            </div>
            <div className={s.text}>
                <div className={s.textCont}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default CounterItem;