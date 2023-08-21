import './styles/App.css'
import './styles/reset.css'
import Router from "./Router.jsx";
import { useState } from 'react';
import ConnectionMenu from './components/ConnectionMenu/ConnectionMenu';

function App() {
    return (
        <div className={'App modal'}>
            <Router/>
            <ConnectionMenu />
        </div>
    )
}

export default App
