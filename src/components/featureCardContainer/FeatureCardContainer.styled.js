import styled from "styled-components";

const StyledFeatureCardContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: static;

    @media (min-width: 920px) {
        flex-direction: row;
    }
`

export default StyledFeatureCardContainer