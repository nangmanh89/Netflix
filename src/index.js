import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'normalize.css';
import { GlobalStyle } from './global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
);
