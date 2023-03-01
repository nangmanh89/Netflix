import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 70px 56px 0 56px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    /* note */
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 15px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Break = styled.p`
    /* note */
    flex-basis: 100%;
    height: 0;
`;
