import React from "react";
import { Wrapper } from "./Post.styles";

export const Post = ({ title, content }) => {
    return (
        <Wrapper>
            <h2>{title}</h2>

            <span>{content}</span>
        </Wrapper>
    )
}
