import Header from "./Header"
import Trailer from "./Trailer"
import MovieSeriesLists from "./MovieSeriesLists"
import useFetchMovies from "../hooks/useFetchMovies"
import useFetchTrailer from "../hooks/useFetchTrailer"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const Browse = () => {
    const [trailerMovie, setTrailerMovie] = useState(null)
    useFetchMovies()
    const movies = useSelector(store => store.movie?.movieLists?.[0])
    useEffect(() => {
        if (movies?.length) {
            setTrailerMovie([movies[0],"m"])
        }
    }, [movies]) // Only run when movies changes
    useFetchTrailer(trailerMovie)

    return (
        <div className="bg-black pb-1 ">
            <Header />
            {trailerMovie && <Trailer trailerMovie={trailerMovie[0]} />}
            <MovieSeriesLists setTrailerMovie={setTrailerMovie} />
        </div>
    )
}

export default Browse