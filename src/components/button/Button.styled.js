import styled from "styled-components";

const StyledButton = styled.button`
    display: block;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    padding: 10px;
    font-weight: bold;

    .sign-in-button,
    .transaction-button {
        width: 100%;
        padding: 8px;
        font-size: 1.1rem;
        margin-top: 1rem;
    }

    .transaction-button {
        @media (min-width: 720px) {
            width: 200px;
        }
    }
`

export default StyledButton