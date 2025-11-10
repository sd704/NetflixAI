import { TMDB_MOVIE_LIST_TYPES, TMDB_MOVIE_URL, TMDB_SERIES_LIST_TYPES, TMDB_SERIES_URL, API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addMovieLists, addSeriesLists } from "../utils/movieSlice"

const useFetchMovies = () => {
    const dispatch = useDispatch()

    const getMovieLists = async (type) => {
        const rawData = await fetch(TMDB_MOVIE_URL(type), API_OPTIONS)
        const data = await rawData.json()
        console.log(data)
        dispatch(addMovieLists(data.results))
    }

    const getSeriesLists = async (type) => {
        const rawData = await fetch(TMDB_SERIES_URL(type), API_OPTIONS)
        const data = await rawData.json()
        console.log(data)
        dispatch(addSeriesLists(data.results))
    }

    useEffect(() => {
        TMDB_MOVIE_LIST_TYPES.forEach((movieListType) => {
            getMovieLists(movieListType)
        })
        TMDB_SERIES_LIST_TYPES.forEach((seriesListType) => {
            getSeriesLists(seriesListType)
        })
    }, [dispatch])
}

export default useFetchMovies