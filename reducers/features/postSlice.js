import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        createPost: (state, { payload }) => {
            return [...state, payload]
        }
    }
})


export const { createPost } = postSlice.actions

export const selectPosts = state => state.posts

export default postSlice.reducer