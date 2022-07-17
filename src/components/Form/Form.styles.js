import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    min-width: 300px;

    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    input[type='text'] {
        width: 100%;
        min-width: 500px;
        
        padding: 10px;
        border-radius: 7px;
        border-color: #fff;
        outline: none;
        font-size: 16px;
    }

    textarea{
        width: 100%;
        min-width: 300px;
        height: 80px;

        padding: 10px;
        font-size: 16px;

        margin-top: 20px;
        margin-bottom: 20px;
    }

    button {
        width: 150px;
        padding: 15px 12px;

        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: filter 500ms ease;
        font-size: 18px;
    }

    button:hover {
        filter: brightness(.7);
    }
`