import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';

import { MainPageAsync, PostPageAsync } from './pages';

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/posts/123'}>К посту 123</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route
                        path={'/posts/:postId'}
                        element={<PostPageAsync />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
