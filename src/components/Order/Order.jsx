import React from 'react';
import OrderForm from "./OrderForm/OrderForm.jsx";
import s from './Order.module.scss'

const Order = () => {


    return (
        <div className={s.container}>
            <div className={s.title}>Подать заявку</div>
            <OrderForm/>
        </div>
    );
};

export default Order;