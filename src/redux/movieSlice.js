import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        trailerData: null,
        trailerType: null,
        trailerKey: {},
        showInfo: false,
        movieLists: [],
        seriesLists: []
    },
    reducers: {
        addMovieLists: (state, action) => {
            state.movieLists.push(action.payload)
        },
        addSeriesLists: (state, action) => {
            state.seriesLists.push(action.payload)
        },
        addTrailerData: (state, action) => {
            state.trailerData = action.payload
        },
        addTrailerType: (state, action) => {
            state.trailerType = action.payload
        },
        addTrailerKey: (state, action) => {
            const { id, key } = action.payload
            state.trailerKey[id] = key
        },
        toggleShowInfo: (state) => {
            state.showInfo = !state.showInfo
        },
    }
})

export const { addMovieLists, addSeriesLists, addTrailerData, addTrailerType, addTrailerKey, toggleShowInfo } = movieSlice.actions
export default movieSlice.reducer