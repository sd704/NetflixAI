import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"

const useFetchMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const data = await rawData.json()
        console.log(data)
        dispatch(addNowPlayingMovies(data.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useFetchMovies