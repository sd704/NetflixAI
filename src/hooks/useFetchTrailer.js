import { TMDB_MOVIE_VIDEO_URL, TMDB_SERIES_VIDEO_URL, API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerKey } from "../redux/movieSlice"

const useFetchTrailer = () => {
    const dispatch = useDispatch()
    const trailerType = useSelector(store => store.movie?.trailerType)
    const trailerData = useSelector(store => store.movie?.trailerData)
    const trailerKey = useSelector(store => store.movie?.trailerKey)

    useEffect(() => {
        if (!trailerData && !trailerType) return

        // If TrailerKey is saved already, return
        if (trailerData.id in trailerKey) return

        const getTrailerVideo = async (URL, id) => {
            const rawData = await fetch(URL(id), API_OPTIONS)
            const jsonData = await rawData.json()
            const filterData = jsonData.results.filter((video) => video.type === "Trailer")
            const trailerVideoData = filterData.length > 0 ? filterData[0] : jsonData[0]
            dispatch(addTrailerKey({ id: id, key: trailerVideoData?.key }))
        }

        if (trailerType === "m") {
            getTrailerVideo(TMDB_MOVIE_VIDEO_URL, trailerData.id)
        } else if (trailerType === "s") {
            getTrailerVideo(TMDB_SERIES_VIDEO_URL, trailerData.id)
        }

    }, [trailerType, trailerData, trailerKey, dispatch])
}

export default useFetchTrailer