import { TMDB_MOVIE_LIST_TYPES, TMDB_MOVIE_URL, TMDB_SERIES_LIST_TYPES, TMDB_SERIES_URL, API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMovieLists, addSeriesLists } from "../redux/movieSlice"

const useFetchMoviesSeries = () => {
    const dispatch = useDispatch()
    const movieList = useSelector(store => store.movie?.movieLists)
    const seriesList = useSelector(store => store.movie?.seriesLists)

    useEffect(() => {
        if (movieList.length && seriesList.length) return

        const getMovieLists = async (type) => {
            try {
                const rawData = await fetch(TMDB_MOVIE_URL(type), API_OPTIONS)
                const data = await rawData.json()
                dispatch(addMovieLists(data.results))
            } catch (error) {
                console.error('Error fetching movie lists:', error);
            }
        }

        const getSeriesLists = async (type) => {
            try {
                const rawData = await fetch(TMDB_SERIES_URL(type), API_OPTIONS)
                const data = await rawData.json()
                dispatch(addSeriesLists(data.results))
            } catch (error) {
                console.error('Error fetching movie lists:', error);
            }
        }

        TMDB_MOVIE_LIST_TYPES.forEach((movieListType) => {
            getMovieLists(movieListType)
        })
        TMDB_SERIES_LIST_TYPES.forEach((seriesListType) => {
            getSeriesLists(seriesListType)
        })
    }, [movieList, seriesList, dispatch])
}

export default useFetchMoviesSeries