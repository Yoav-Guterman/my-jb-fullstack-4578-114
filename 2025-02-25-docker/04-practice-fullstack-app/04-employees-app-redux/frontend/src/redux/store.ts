import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: { // i.e. slices

    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch