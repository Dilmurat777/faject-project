import React from 'react';
import Order from "../../components/Order/Order.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const OrderPage = () => {
    return (
        <div>
            <Header/>
            <Order/>
            <Footer/>
        </div>
    );
};

export default OrderPage;