import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 165px 45px 185px;
    @media (max-width: 600px) {
        padding: 165px 0;
    }
`;
export const Title = styled.h1`
    color: white;
    max-width: 940px;
    font-size: 48px;
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
    margin: 16px auto 0 auto;
    @media (max-width: 600px) {
        font-size: 18px;
        margin-top: 16px;
    }
`;
