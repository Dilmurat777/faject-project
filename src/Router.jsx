import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import PolicyPage from './pages/PolicyPage/PolicyPage';


const Router = () => {
    return (
        <Routes>
            <Route path={'/:id'} element={<MainPage />} />
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/policy'} element={<PolicyPage />} />
        </Routes>
    );
};

export default Router;