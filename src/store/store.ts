import { configureStore } from '@reduxjs/toolkit'
import moodReducer from "./moodSlice.ts";

export const store = configureStore({
    reducer: {
        appModeChange: moodReducer
    },
})

export type RootState = ReturnType<typeof store.getState>