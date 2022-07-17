import React from "react";
import { Wrapper } from "./Form.styles";
import { Post } from "../Post/Post";

export const Form = () => {
    return (
        <Wrapper>
            <input type="text" placeholder="Título"/>
            <textarea maxLength={100} type="text" placeholder="O que está pensando?"></textarea>

            <button>Enviar</button>

            <h1>Posts</h1>
            <Post title={'Title'} content={'Test Content'}/>
        </Wrapper>
    )
}