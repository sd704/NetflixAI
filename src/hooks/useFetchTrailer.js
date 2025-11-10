import { TMDB_MOVIE_VIDEO_URL, TMDB_SERIES_VIDEO_URL, API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerKey } from "../utils/movieSlice"

const useFetchTrailer = (trailerMovie) => {
    const dispatch = useDispatch()

    const getTrailerVideo = async (URL, id) => {
        const rawData = await fetch(URL(id), API_OPTIONS)
        const jsonData = await rawData.json()
        const filterData = jsonData.results.filter((video) => video.type === "Trailer")
        const trailerData = filterData.length > 0 ? filterData[0] : jsonData[0]
        dispatch(addTrailerKey(trailerData.key))
    }

    useEffect(() => {
        if (!trailerMovie) return
        if (trailerMovie[1] === "m") {
            getTrailerVideo(TMDB_MOVIE_VIDEO_URL, trailerMovie[0].id)
        } else if (trailerMovie[1] === "s") {
            getTrailerVideo(TMDB_SERIES_VIDEO_URL, trailerMovie[0].id)
        }

    }, [trailerMovie, dispatch])
}

export default useFetchTrailer