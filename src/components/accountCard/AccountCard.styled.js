import styled from "styled-components";

const StyledAccountCard = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;

    .account-content-wrapper {
        width: 100%;
        flex: 1;
    }

    .account-title {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: normal;
    }

    .account-amount {
        margin: 0;
        font-size: 2.5rem;
        font-weight: bold;
    }

    .account-amount-description {
        margin: 0;
    }

    @media (min-width: 720px) {
        flex-direction: row;

        .account-content-wrapper.cta {
            flex: 0;
        }
    }
`

export default StyledAccountCard