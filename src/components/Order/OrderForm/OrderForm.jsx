import React, {useState} from 'react';
import s from "./OrderForm.module.scss";
import Input from "../../../UI/Input/Input.jsx";
import Select from "../../../UI/Select/Select.jsx";
import Button from "../../../UI/Button/Button.jsx";


const OrderForm = () => {

    const [name, setName] = useState('')
    const [account, setAccount] = useState('')
    const [formData, setFormData] = useState({
        messenger: '',
        service: '',
    })

    const messenger = [
        {id: 1, title: 'Telegram'}
    ]
    const handleDisabled = () => {
        if(!name || !account){
            return true
        }
    }

    const service = [
        {id: 1, title: 'Мобильная разработка'},
        {id: 2, title: 'Десктоп разработка'},
        {id: 3, title: 'Мобильная'},
        {id: 4, title: 'Блокчейн'},

    ]

    return (
        <div className={s.form}>
            <Input
                value={name}
                setValue={setName}
                placeholder='Введите ваше имя'
            />
            <Select
                setFormData={setFormData}
                formData={formData}
                menu={messenger}
                placeholder={'Выберите канал для связи'}
                type={'messenger'}
            >
            </Select>
            <Input
                value={account}
                setValue={setAccount}
                placeholder='Ваше имя пользователя/телефон'
            />
            <Select
                setFormData={setFormData}
                formData={formData}
                menu={service}
                placeholder={'Выберите услугу'}
                type={'service'}
            >
            </Select>
            <Button className={s.btn} disabled={handleDisabled}>Отправить</Button>
        </div>
    );
};

export default OrderForm;