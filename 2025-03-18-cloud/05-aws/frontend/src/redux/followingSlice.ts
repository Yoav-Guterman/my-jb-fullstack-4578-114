import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/user/User";

interface FollowingState {
    following: User[],
    isLoading: boolean
}

const initialState: FollowingState = {
    following: [],
    isLoading: true
}

export const followingSlice = createSlice({
    name: 'following',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.following = action.payload
            state.isLoading = false
        },
        unfollow: (state, action: PayloadAction<{ userId: string }>) => {
            state.following = state.following.filter(f => f.id !== action.payload.userId)
        },
        follow: (state, action: PayloadAction<User>) => {
            state.following.push(action.payload)
        },
        resetFollowingLoad: (state) => {
            state.isLoading = true
        }
    }
})

export const { init, unfollow, follow, resetFollowingLoad } = followingSlice.actions

export default followingSlice.reducer