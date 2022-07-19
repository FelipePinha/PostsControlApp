import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-width: 300px;
    height: 150px;

    margin-top: 20px;
    margin-bottom: 20px;
    
    box-shadow: 0 0 0 7px #eee;
    border-radius: 10px;
    color: #eee;

    padding: 10px;

    display: flex;
    flex-direction: column;
    row-gap: 15px;

    font-size: 18px;

    h2 {
        letter-spacing: 2px;
    }

    .deleteBtn {
        color: lightcoral;
        font-weight: bold;
        font-size: 20px;
        
        position: absolute;
        top: 15px;
        right: 20px;

        cursor: pointer;
    }

    .deleteBtn:hover {
        text-decoration: underline;
    }
`