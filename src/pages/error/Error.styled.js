import styled from "styled-components";

const StyledError = styled.main`
    width: 70%;
    max-width: 1200px;
    margin: 0 auto;
    height: 55vh;
    color: #00bc77;
    text-align: center;

    .number {
        font-size: 3rem;
        font-weight: 700;
        margin: 2em 0 0;
    }

    .text {
        font-size: 1rem;
        margin-bottom: 150px;
    }

    .link {

        font-size: 1rem;
        
        &:visited, &:active {
            color: #00bc77;
        }
    }
`

export default StyledError