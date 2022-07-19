import React from "react";
import { Wrapper } from "./Post.styles";
import { deletePost, selectPosts } from "../../../reducers/features/postSlice";
import { useDispatch, useSelector } from "react-redux";

export const Post = ({ title, content, id }) => {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)

    function handleDeletePost() {
        dispatch(deletePost(id))
    }

    return (
        <Wrapper>
            <h2>{title}</h2>

            <span>{content}</span>

            <span onClick={handleDeletePost} className="deleteBtn">Deletar</span>
        </Wrapper>
    )
}
