import { TMDB_NOW_PLAYING_MOVIE, API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"

const useFetchMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const rawData = await fetch(TMDB_NOW_PLAYING_MOVIE, API_OPTIONS)
        const data = await rawData.json()
        console.log(data)
        dispatch(addNowPlayingMovies(data.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [dispatch])
}

export default useFetchMovies