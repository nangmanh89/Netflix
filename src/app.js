import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { useAuthListener } from './hooks';

export default function App() {
    // const user = useAuthListener();
    // console.log(user);
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.SIGN_IN} element={<Signin />} />
                <Route path={ROUTES.SIGN_UP} element={<Signup />} />
                <Route exact path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.BROWSE} element={<Browse />} />
            </Routes>
        </Router>
    );
}
