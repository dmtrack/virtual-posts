import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../src/app/styles/reset.scss';
import '../src/app/styles/globals.scss';
import { MainPageAsync, PostPageAsync } from './pages';

const App = () => {
    return (
        <div>
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
