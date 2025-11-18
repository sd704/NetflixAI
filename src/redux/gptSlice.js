import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        language: "English",
        gptPage: false,
        gptResults: [],
        selectedItem: {},
        isLoading: false,
        noResult: false
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
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload
        },
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading
        },
        toggleNoResult: (state, action) => {
            state.noResult = action.payload
        },
    }
})

export const { toggleGptPageState, setLanguage, addGptResults, setSelectedItem, toggleLoading, toggleNoResult } = gptSlice.actions
export default gptSlice.reducer