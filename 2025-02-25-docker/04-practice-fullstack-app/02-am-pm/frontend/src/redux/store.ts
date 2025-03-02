import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./profileSlice";

const store = configureStore({
    reducer: { // slice list
        // following: followingSlice.reducer, // single slice
        // followers: followersSlice.reducer,
        profile: profileSlice.reducer,
        // feed: feedSlice.reducer
    }

})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch