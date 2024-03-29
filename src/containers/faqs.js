import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item) => {
                return (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                );
            })}

            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button to="/signIn">Get Started</OptForm.Button>
            </OptForm>
        </Accordion>
    );
}
