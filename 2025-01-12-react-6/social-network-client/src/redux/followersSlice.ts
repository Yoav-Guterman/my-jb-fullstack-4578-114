import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/user/User";

interface FollowersState {
    followers: User[]
    isLoading: boolean
}

const initialState: FollowersState = {
    followers: [],
    isLoading: true
}

export const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload
            state.isLoading = false
        },
        resetFollowersLoad: (state) => {
            state.isLoading = true
        }
    }
})

export const { init, resetFollowersLoad } = followersSlice.actions

export default followersSlice.reducer