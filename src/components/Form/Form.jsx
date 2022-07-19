import React, { useState } from "react";
import { Wrapper } from "./Form.styles";
import { Post } from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { createPost, selectPosts } from "../../../reducers/features/postSlice";

export const Form = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    function handleAddPost() {
        if (title && content) {
            dispatch(createPost(
                {
                    id: nanoid(),
                    title: title,
                    content: content
                }
            ))
        }
    }

    return (
        <Wrapper>
            <input 
             onChange={e => setTitle(e.target.value)}
             type="text" 
             placeholder="Título"
             />
            
            <textarea 
             onChange={e => setContent(e.target.value)}
             maxLength={100}
             type="text" 
             placeholder="O que está pensando?">
             </textarea>

            <button onClick={handleAddPost}>Enviar</button>

            <h1>Posts</h1>
            {
                posts.map(post => (
                    <Post key={post.id} id={post.id} title={post.title} content={post.content}/>
                ))
            }
        </Wrapper>
    )
}