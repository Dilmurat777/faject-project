import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage.jsx";
import Policy from './pages/Policy/Policy';


const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/order'} element={<OrderPage />} />
            <Route path={'/policy'} element={<Policy />} />
        </Routes>
    );
};

export default Router;