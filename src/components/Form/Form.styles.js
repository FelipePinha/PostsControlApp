import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    min-width: 300px;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    input[type='text'] {
        width: 100%;
        min-width: 500px;
        
        padding: 10px;
        border-radius: 7px;
        border-color: #fff;
        outline: none;
        font-size: 16px;
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