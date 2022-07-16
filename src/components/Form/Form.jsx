import React from "react";
import { Wrapper } from "./Form.styles";

export const Form = () => {
    return (
        <Wrapper>
            <input type="text" placeholder="Título"/>
            <input type="text" placeholder="O que está pensando?"/>

            <button>Enviar</button>
        </Wrapper>
    )
}