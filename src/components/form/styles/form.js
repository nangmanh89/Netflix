import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 620px;
    background-color: ${({ signup }) => (signup ? 'rgba(243, 243, 243, 0.7)' : 'rgba(0, 0, 0, 0.75)')};
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Title = styled.h1`
    color: ${({ signup }) => (signup ? '#333' : '#fff')};
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`;

export const Text = styled.p`
    color: ${({ signup }) => (signup ? 'black' : '#737373')};
    font-size: 16px;
    font-weight: 500;
`;

export const TextSmall = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: ${({ signup }) => (signup ? 'black' : '#8c8c8c')};
`;

export const Link = styled(ReactRouterLink)`
    color: ${({ signup }) => (signup ? '#0071eb' : 'white')};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    background-color: ${({ signup }) => (signup ? 'white' : '#333')};
    border-radius: 4px;
    border: ${({ signup }) => (signup ? '1px solid black' : '0')};
    color: ${({ signup }) => (signup ? 'black' : 'white')};
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const Submit = styled.button`
    background-color: ${({ signup }) => (signup ? '#0080ff' : '#e50914')};
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
    }
`;
