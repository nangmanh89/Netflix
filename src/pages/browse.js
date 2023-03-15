import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import backgroundImage from '../accets/homeBackground/home.jpg';
import MovieLogo from '../accets/homeBackground/no-way home.png';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components/macro';

export default function Browse() {
    // need the series and the film
    //  need slides
    // pass it to the browse container
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="hero">
                <img src={backgroundImage} alt="background" className="background-image" />
                <div className="container">
                    <div className="logo">
                        <img src={MovieLogo} alt="Movie Logo" />
                    </div>
                    <div className="buttons flex">
                        <button onClick={() => navigate('/player')} className="flex j-center a-center">
                            <FaPlay />
                            Play
                        </button>
                        <button className="flex j-center a-center">
                            <AiOutlineInfoCircle />
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    background-color: black;
    .hero {
        position: relative;
        .background-image {
            filter: brightness(80%);
        }
        img {
            width: 100vw;
        }
        .container {
            position: absolute;
            bottom: 5rem;
            .logo {
                img {
                    width: 40vw;
                    margin-left: 5rem;
                }
            }
            .buttons {
                margin: 5rem;
                gap: 2rem;
                button {
                    font-size: 1.4rem;
                    gap: 1rem;
                    border-radius: 0.2rem;
                    padding: 0.5rem;
                    padding-left: 2rem;
                    padding-right: 2.4rem;
                    border: none;
                    cursor: pointer;
                    transition: 0.2s ease-in-out;
                    &:hover {
                        opacity: 0.8;
                    }
                    &:nth-of-type(2) {
                        background-color: rgba(109, 109, 110, 0.7);
                        color: white;
                        svg {
                            font-size: 1.8rem;
                        }
                    }
                }
            }
        }
    }
`;
