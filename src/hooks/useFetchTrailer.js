import { TMDB_VIDEO_URL, API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerKey } from "../utils/movieSlice"

const useFetchTrailer = (id) => {
    const dispatch = useDispatch()

    const getTrailerVideo = async () => {
        const rawData = await fetch(TMDB_VIDEO_URL(id), API_OPTIONS)
        const jsonData = await rawData.json()
        const filterData = jsonData.results.filter((video) => video.type === "Trailer")
        const trailerData = filterData.length > 0 ? filterData[0] : jsonData[0]
        dispatch(addTrailerKey(trailerData.key))
    }

    useEffect(() => {
        if (!id) return
        getTrailerVideo()
    }, [id, dispatch])
}

export default useFetchTrailer