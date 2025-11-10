import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        trailerKey: null,
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
        addTrailerKey: (state, action) => {
            state.trailerKey = action.payload
        }
    }
})

export const { addMovieLists, addSeriesLists, addTrailerKey } = movieSlice.actions
export default movieSlice.reducer