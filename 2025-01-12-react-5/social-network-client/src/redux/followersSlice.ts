import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/user/User";

interface FollowersState {
    followers: User[]
}

const initialState: FollowersState = {
    followers: []
}

export const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload
        }
    }
})

export const { init } = followersSlice.actions

export default followersSlice.reducer