import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { firebaseAuth } from '../../lib/firebase.prod';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styles/navbar';
import logo from '../../logo.png';

export default function Navbar({ isScrolled }) {
    const navigae = useNavigate();
    const links = [
        { name: 'Browse', link: '/browse' },
        { name: 'TvShows', link: '/tv' },
        { name: 'Movies', link: '/movies' },
        { name: 'Mylist', link: '/mylist' },
    ];

    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);
    return (
        <Container>
            <nav className={`flex ${isScrolled ? 'scrolled' : ''}`}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="links flex">
                        {links.map(({ name, link }) => {
                            return (
                                <li key={name}>
                                    <Link to={link}>{name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="right flex a-center">
                    <div className={`search ${showSearch ? 'show-search' : ''}`}>
                        <button
                            onFocus={() => setShowSearch(true)}
                            onBlur={() => {
                                if (!inputHover) setShowSearch(false);
                            }}
                        >
                            <FaSearch />
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            onMouseEnter={() => setInputHover(true)}
                            onMouseLeave={() => setInputHover(false)}
                            onBlur={() => {
                                setShowSearch(false);
                                setInputHover(false);
                            }}
                        />
                    </div>
                    <button
                        onClick={() =>
                            signOut(firebaseAuth).then(() => {
                                navigae('/signIn');
                            })
                        }
                    >
                        <FaPowerOff />
                    </button>
                </div>
            </nav>
        </Container>
    );
}
