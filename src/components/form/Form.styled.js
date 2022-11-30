import styled from "styled-components";

const StyledForm = styled.form`
    .input-wrapper {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-bottom: 1rem;

        label {
            font-weight: bold;
        }

        input {
            padding: 5px;
            font-size: 1.2rem;
        }
    }

    .input-remember {
        display: flex;

        label {
            margin-left: 0.25rem;
        }
    }

    .btn {
        margin-top: 1rem;
    }

`

export default StyledForm