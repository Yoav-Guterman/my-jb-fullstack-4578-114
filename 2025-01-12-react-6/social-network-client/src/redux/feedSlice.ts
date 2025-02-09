import Comment from "../models/comment/Comment";
import Post from "../models/post/Post";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeedState {
    posts: Post[],
    isNewContent: boolean
    isLoading: boolean
}

const initialState: FeedState = {
    posts: [],
    isNewContent: false,
    isLoading: true
}

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
            state.isNewContent = false
            state.isLoading = false

        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.push(action.payload)
        },
        setNewContent: (state, action: PayloadAction<boolean>) => {
            state.isNewContent = action.payload
        },
        resetFeedLoad: (state) => {
            state.isLoading = true
        }
    }
})

export const { init, addComment, setNewContent, resetFeedLoad } = feedSlice.actions

export default feedSlice.reducer