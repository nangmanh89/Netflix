import styled from 'styled-components/macro';
import { Link as buttonLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    flex-wrap: wrap;
    max-width: 820px;
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        padding: 0 5%;
    }
`;
export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 10px 10px 0;
    height: 56px;
    box-sizing: border-box;
    text-align: start;
    outline: none;
    @media (max-width: 1000px) {
        height: 48px;
        width: 100%;
    }
`;

export const ButtonLink = styled(buttonLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 56px;
    background: #e50914;
    color: white;
    padding: 0px 1em;
    font-size: 24px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 8px;
    &:hover {
        background-color: #f40612;
    }
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 18px;
        @media (max-width: 1000px) {
            width: 16px;
        }
    }
    @media (max-width: 1000px) {
        width: auto;
        font-size: 1rem;
        height: 48px;
        margin-top: 20px;
    }
`;
export const Text = styled.p`
    font-size: 19.2px;
    color: white;
    text-align: center;
    margin: 34px 0 18px 0;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;
// export const Break = styled.div`
//     flex-basis: 100%;
//     height: 0;
// `;
