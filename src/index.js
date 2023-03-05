import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'normalize.css';
import { GlobalStyle } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyle />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
);
