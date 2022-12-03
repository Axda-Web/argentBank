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
        margin-top: 1rem;
        display: flex;

        label {
            margin-left: 0.25rem;
        }
    }

    .btn {
        margin-top: 1rem;
    }

    .error-message {
        color: red;
        font-weight: bold;
    }

    .error-style {
        border: 2px solid red;
    }

`

export default StyledForm