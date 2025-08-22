import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    appMood: true
}

export const moodSlice = createSlice({
    name: 'appMood',
    initialState,
    reducers: {
        moodChange: (state, action) => {
            state.appMood = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { moodChange } = moodSlice.actions

export default moodSlice.reducer