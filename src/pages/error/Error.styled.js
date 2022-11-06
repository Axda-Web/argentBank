import styled from "styled-components";

const StyledError = styled.main`
    width: 70%;
    max-width: 1200px;
    margin: 0 auto;
    height: 55vh;
    color: ${({theme}) => theme.colors.primary};
    text-align: center;

    .number {
        font-size: ${({theme}) => theme.fontSize.big};
        font-weight: 700;
        margin: 2em 0 0;
    }

    .text {
        font-size: ${({theme}) => theme.fontSize.md};
        margin-bottom: 150px;
    }

    .link {

        font-size: ${({theme}) => theme.fontSize.sm};
        
        &:visited, &:active {
            color: ${({theme}) => theme.colors.primary};
        }
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        .number {
            font-size: ${({theme}) => theme.fontSize.huge};
            margin-top: 140px;
        }

        .text {
            font-size: ${({theme}) => theme.fontSize.xl};
        }

        .link {
            font-size: ${({theme}) => theme.fontSize.md};
        }
    }
`

export default StyledError