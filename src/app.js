import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup, Home, Browse, Signin } from './pages';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/browse" element={<Browse />} />
                <Route exact path="/signIn" element={<Signin />} />
                <Route exact path="/signUp" element={<Signup />} />
            </Routes>
        </Router>
    );
}
