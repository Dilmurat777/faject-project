import React, {useEffect, useState} from 'react';
import s from './Select.module.scss'
import DropDown from "./DropDown/DropDown.jsx";

const Select = ({placeholder, menu, setFormData, type, formData}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    useEffect(() => {
        if(type === 'messenger'){
            setFormData({...formData,messenger: selectedOption})
        }else if(type === 'service'){
            setFormData({...formData,service: selectedOption})
        }
    }, [selectedOption])

    const classHandler = () => {
        return isOpen ?
            selectedOption ?
                [s.select, s.activeSelect, s.activeDrop].join(' ') :
                [s.select, s.activeDrop].join(' ') :
            selectedOption ?
                [s.select, s.activeSelect].join(' ') :
                s.select
    }

    return (
        <div onClick={() => setIsOpen(!isOpen)} className={s.main}>
            <input
                disabled
                className={classHandler()}
                placeholder={selectedOption || placeholder}/>
            <DropDown
                menu={menu}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setSelectedOption={setSelectedOption}
                selectedOption={selectedOption}/>
            <div>
            </div>
        </div>
    );
};

export default Select;