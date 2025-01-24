import Comment from "../models/comment/Comment";
import Post from "../models/post/Post";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
    posts: Post[]
    newPostId: string | null;
}

const initialState: ProfileState = {
    posts: [],
    newPostId: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
            state.newPostId = null
        },
        newPost: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts]
            state.newPostId = action.payload.id
        },
        remove: (state, action: PayloadAction<{ id: string }>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload.id)
        },
        update: (state, action: PayloadAction<Post>) => {
            const index = state.posts.findIndex(p => p.id === action.payload.id)
            if (index > -1) {
                state.posts[index] = action.payload
            }
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.push(action.payload)
        },
        clearNewPostId: (state) => {
            state.newPostId = null;
        },
    }
})

export const { init, newPost, remove, update, addComment, clearNewPostId } = profileSlice.actions

export default profileSlice.reducer