import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        createPost: (state, { payload }) => {
            return [...state, payload]
        },
        deletePost: (state, action) => {
            const postId = action.payload
            return [...state.filter(post => post.id !== postId)]
        }
    }
})


export const { createPost, deletePost } = postSlice.actions

export const selectPosts = state => state.posts

export default postSlice.reducer