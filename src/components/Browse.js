import Header from "./Header"
import Trailer from "./Trailer"
import MovieSeriesLists from "./MovieSeriesLists"
import useFetchMoviesSeries from "../hooks/useFetchMoviesSeries"
import useFetchTrailer from "../hooks/useFetchTrailer"
import useAddTrailerData from "../hooks/useAddTrailerData"

const Browse = () => {

    useFetchMoviesSeries()
    useAddTrailerData()
    useFetchTrailer()

    return (
        <div className="bg-black pb-1 ">
            <Header />
            <Trailer />
            <MovieSeriesLists />
        </div>
    )
}

export default Browse