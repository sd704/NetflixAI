import CardLayout from "./CardLayout"
import { TMDB_MOVIE_LIST_TYPES, TMDB_SERIES_LIST_TYPES } from "../utils/constants"
import { useSelector } from "react-redux"

const MovieSeriesLists = ({ setTrailerMovie }) => {
    const movieList = useSelector(store => store.movie?.movieLists)
    const seriesList = useSelector(store => store.movie?.seriesLists)

    return (
        <div className="relative -top-96 z-20 w-full pl-12">
            {
                TMDB_MOVIE_LIST_TYPES.map((movieListType, index) =>
                    <CardLayout key={movieListType + " Movies"} heading={movieListType + " Movies"} listData={movieList?.[index]} setTrailerMovie={setTrailerMovie} type="m" />
                )
            }
            {
                TMDB_SERIES_LIST_TYPES.map((seriesListType, index) =>
                    <CardLayout key={seriesListType + " Shows"} heading={seriesListType + " Shows"} listData={seriesList?.[index]} setTrailerMovie={setTrailerMovie} type="s" />
                )
            }
            {/* Type "m" for movie, "s" for series */}
        </div>
    )
}

export default MovieSeriesLists