import styled from "styled-components";

const StyledProfile = styled.main`
    flex: 1;
    background-color: #12002b;

    .header {
        color: #fff;
        margin-bottom: 2rem;
        padding: 1rem 0;
    }

    .btn {
        margin: 0 auto;
    }

    input {
        padding: 5px;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .input-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 1rem;
    }


    .btn-wrapper {
        display: flex;
        column-gap: 1rem;
        justify-content: center;

        .btn {
            width: 100px;
            margin: 0;
        }
    }
`

export default StyledProfile