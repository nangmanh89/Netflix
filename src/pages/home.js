import React from 'react';
import FaqsContainer from '../containers/faqs';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import { Feature, OptForm } from '../components';

export default function Home() {
    console.log('this is home page');
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>

                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership
                        </OptForm.Text>

                        <OptForm.Input placeholder="Email Address" />

                        <OptForm.Button>Get Started</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />

            <FaqsContainer />

            <FooterContainer />
        </>
    );
}
