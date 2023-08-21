import React, {useState} from 'react';
import s from './input.module.scss'
import clsx from "clsx";

const Input = ({placeholder, value, setValue}) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className={s.main}>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                className={clsx(s.input, {
                    [s.actives]: focused
                })}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    );
};

export default Input;