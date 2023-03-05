import React, { useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const auth = getAuth(firebase);
    const [emailAddress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Check form input element are valid
    const isInValid = password === '' || emailAddress === '';
    // Email & password

    const handleSignIn = (event) => {
        event.preventDefault();
        //firebase work here!
        signInWithEmailAndPassword(auth, emailAddress, password)
            .then((user) => {
                console.log(user);
                //push to the browse page
                // history(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAdress('');
                setPassword('');
                setError(error.message);
            });
    };
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={(e) => setEmailAdress(e.target.value)}
                            type="email"
                        ></Form.Input>
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Input>
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix?<Form.Link to="/signup">Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    );
}
