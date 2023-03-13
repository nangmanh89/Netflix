import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';

export default function HeaderContainer({ children, ...restProps }) {
    return (
        <>
            <Header {...restProps}>
                <Header.Frame>
                    <Header.Logo to={'/'} alt="Netflix" src={logo} />
                    {restProps.signup || restProps.home ? (
                        <Header.ButtonLink to={'/signIn'}>Sign In</Header.ButtonLink>
                    ) : (
                        <Header.ButtonLink to={'/signUp'}>Sign Up</Header.ButtonLink>
                    )}
                </Header.Frame>
                {children}
            </Header>
        </>
    );
}
