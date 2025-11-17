import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        language: "English",
        gptPage: false,
        gptResults: [],
    },
    reducers: {
        toggleGptPageState: (state) => {
            state.gptPage = !state.gptPage
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        addGptResults: (state, action) => {
            state.gptResults = action.payload
        },
    }
})

export const { toggleGptPageState, setLanguage, addGptResults } = gptSlice.actions
export default gptSlice.reducer