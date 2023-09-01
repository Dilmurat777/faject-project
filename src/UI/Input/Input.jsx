import React, {useState} from 'react';
import s from './input.module.scss'
import clsx from "clsx";

const Input = ({placeholder, value, setValue, ...props}) => {
    const [focused, setFocused] = useState(false)
    return (
            <input
                value={value}
                onChange={setValue}
                className={clsx(s.input, {
                    [s.actives]: focused
                })}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                {...props}
            />
    );
};

export default Input;