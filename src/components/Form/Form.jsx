import React, { useState } from "react";
import { Wrapper } from "./Form.styles";
import { Post } from "../Post/Post";

export const Form = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState([])

    const handleAddPost = () => {
        if(title && content) {
            const newPosts = [...posts, {
                title: title,
                content: content
            }]

            setPosts(newPosts)
            setTitle('')
            setContent('')
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
                    <Post title={post.title} content={post.content}/>
                ))
            }
        </Wrapper>
    )
}