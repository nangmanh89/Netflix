import styled from 'styled-components/macro';

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1300px;
    margin: auto;
    width: 100%;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 50%;
    position: relative;
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    color: ${({ color }) => color};
    margin-bottom: 8px;
    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    @media (max-width: 1000px) {
        max-width: ${({ id }) => (id === 2 ? '50%' : '100%')};
    }
`;
export const VideoContainer = styled.div`
    background-color: white;
    position: absolute;
    display: ${({ id }) => (id !== 1 && id !== 3 ? 'none' : '')};
    top: ${({ id }) => (id === 3 ? '9%' : '21%')};
    left: ${({ id }) => (id === 3 ? '19%' : '13%')};
    width: ${({ id }) => (id === 3 ? '61%' : '74%')};
    @media (max-width: 1000px) {
        top: ${({ id }) => (id === 3 ? '14%' : '19%')};
        left: ${({ id }) => (id === 3 ? '25%' : '17%')};
        width: ${({ id }) => (id === 3 ? '50%' : '65%')};
    }
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;
