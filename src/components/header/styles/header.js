import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0, transparent 60%, rgba(0, 0, 0, 0.8)),
        url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-sigup.jpg')}) no-repeat center/
            cover;
    border-bottom: 8px solid #222;
    /* padding-bottom: 200px; */
`;

export const Frame = styled.div``;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 60px;
    padding: 18px 0;
    width: 92%;
    a {
        display: flex;
    }
    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    &:hover {
        background-color: #f40612;
    }
`;
