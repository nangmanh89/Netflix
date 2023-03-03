import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sigup, Home, Browse } from './pages';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/browse" element={<Browse />} />
                <Route exact path="/sigin" element={<Sigup />} />
                <Route exact path="/sigup" element={<Sigup />} />
            </Routes>
        </Router>
    );
}
