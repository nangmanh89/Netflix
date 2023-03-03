import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';

export default function HeaderContainer({ children }) {
    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Logo to={'./'} alt="Netflix" src={logo} />
                    <Header.ButtonLink to={'./signin'}>Sign In</Header.ButtonLink>
                </Header.Frame>
                {children}
            </Header>
        </>
    );
}
