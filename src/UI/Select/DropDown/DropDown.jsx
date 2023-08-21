import {useRef} from "react";
import s from './DropDown.module.scss'
import {useOutsideCloser} from "../../../hooks/useOutsideCloser.jsx";

const DropDown = ({isOpen, setIsOpen, setSelectedOption, menu}) => {
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const wrapperRef = useRef(null);
    useOutsideCloser(wrapperRef, setIsOpen);

    return (
        <div ref={wrapperRef}>
            {isOpen && (
                <div className={s.dropdown}>
                    {menu.map((item, index) =>
                        <div
                            className={s.item}
                            onClick={() => handleOptionSelect(`${item.title}`)}
                            key={index}
                        >{item.title}
                        </div>
                    )}

                </div>
            )}
        </div>
    );
};

export default DropDown;