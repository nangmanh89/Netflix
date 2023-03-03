import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 165px 45px;
    @media (max-width: 600px) {
        padding: 165px 0;
    }
`;
export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    font-weight: bold;
    margin: auto;
    @media (max-width: 600px) {
        font-size: 28px;
        max-width: 385px;
    }
`;
export const SubTitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: 500;
    margin: auto;
    @media (max-width: 600px) {
        font-size: 18px;
        margin-top: 16px;
    }
`;
