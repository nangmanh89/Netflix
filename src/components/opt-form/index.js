import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OutFormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
};

OptForm.Button = function OutFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
};
// OptForm.Break = function OutFormText({ children, ...restProps }) {
//     return <Break {...restProps}>{children} </Break>;
// };

OptForm.Text = function OutFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children} </Text>;
};
