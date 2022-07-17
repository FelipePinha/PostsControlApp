import React from "react";
import { Wrapper } from "./Form.styles";

export const Form = () => {
    return (
        <Wrapper>
            <input type="text" placeholder="Título"/>
            <textarea type="text" placeholder="O que está pensando?"></textarea>

            <button>Enviar</button>
        </Wrapper>
    )
}