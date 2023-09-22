import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReduxProvider } from './app/redux/provider';
import './app/styles/globals.scss';

import App from './App';

render(
    <BrowserRouter>
        <ReduxProvider>
            <App />
        </ReduxProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
