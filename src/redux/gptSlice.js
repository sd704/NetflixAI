import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptPage: false,
        gptResults: [],
    },
    reducers: {
        toggleGptPageState: (state) => {
            state.gptPage = !state.gptPage
        },
        addGptResults: (state, action) => {
            state.gptResults = action.payload
        },
    }
})

export const { toggleGptPageState, addGptResults } = gptSlice.actions
export default gptSlice.reducer