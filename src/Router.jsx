import React from 'react';
import {Route, Routes} from "react-router-dom";
import OrderPage from './pages/OrderPage/OrderPage';
import MainPage from './pages/MainPage/MainPage';
import PolicyPage from './pages/PolicyPage/PolicyPage';


const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/order'} element={<OrderPage />} />
            <Route path={'/policy'} element={<PolicyPage />} />
        </Routes>
    );
};

export default Router;