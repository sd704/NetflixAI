import Header from "./Header"
import Trailer from "./Trailer"
import MovieSeriesLists from "./MovieSeriesLists"
import useFetchMovies from "../hooks/useFetchMovies"

const Browse = () => {
    useFetchMovies()

    return (
        <div className="bg-black pb-1 ">
            <Header />
            <Trailer />
            <MovieSeriesLists />
        </div>
    )
}

export default Browse