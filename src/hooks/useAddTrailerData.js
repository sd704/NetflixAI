import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addTrailerData, addTrailerType } from "../utils/movieSlice"

const useAddTrailerData = () => {
    const dispatch = useDispatch()
    // Pickup the first movie list
    const movies = useSelector(store => store.movie?.movieLists?.[0])

    useEffect(() => {
        if (movies?.length) {
            // Setting the first movie from first list as trailer
            dispatch(addTrailerData(movies[0]))
            // "m" for movie, "s" for series
            dispatch(addTrailerType("m"))
        }
    }, [movies, dispatch])
    // Only run when movies changes
}

export default useAddTrailerData