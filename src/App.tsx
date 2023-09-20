import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage';
import { MainPage } from './pages/MainPage';
import './index.scss';

const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} />
            </Routes>
        </div>
    );
};

export default App;
