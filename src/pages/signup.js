import React, { useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    console.log('this is sigup page');

    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const auth = getAuth(firebase);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    // const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    // Check form input element are valid
    const isInValid = firstName === '' || password === '' || emailAddress === '';

    // Email & password
    const handleSignUp = (event) => {
        event.preventDefault();

        //firebase work here!---Create NewUser
        createUserWithEmailAndPassword(auth, emailAddress, password)
            .then((result) => {
                // update info User
                updateProfile(result.user, {
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    //push to the browse page
                    history(ROUTES.BROWSE);
                });
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        ></Form.Input>

                        <Form.Input
                            type="email"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                        ></Form.Input>

                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Input>

                        {/* <Form.Input
                            type="password"
                            placeholder="Re-Password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        ></Form.Input> */}

                        {/* if isValid => Submitbutton disabled with opactiy = 0.5 at styled */}
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user?<Form.Link to="/signIn">Sign in now.</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    );
}
