import styled from 'styled-components/macro';
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
    padding: 10px 10px 0;
    height: 59px;
    box-sizing: border-box;
    text-align: start;
    outline: none;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 60px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0px 1em;
    font-size: 26px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 1px;
    &:hover {
        background-color: #f40612;
    }
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;
        @media (max-width: 1000px) {
            width: 16px;
        }
    }
    @media (max-width: 1000px) {
        width: auto;
        font-size: 1rem;
        height: 40px;
        margin-top: 20px;
    }
`;
export const Text = styled.p`
    font-size: 19.2px;
    color: white;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;
// export const Break = styled.div`
//     flex-basis: 100%;
//     height: 0;
// `;
