import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        language: "English",
        gptPage: false,
        gptResults: [],
        selectedItem: {},
        isLoading: false
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
    }
})

export const { toggleGptPageState, setLanguage, addGptResults, setSelectedItem, toggleLoading } = gptSlice.actions
export default gptSlice.reducer