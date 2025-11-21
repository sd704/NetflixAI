import CardLayout from "./CardLayout"
import CardLayoutShimmer from "./CardLayoutShimmer"
import { TMDB_MOVIE_LIST_TYPES, TMDB_SERIES_LIST_TYPES } from "../utils/constants"
import { useSelector } from "react-redux"

const MovieSeriesLists = () => {
    const movieList = useSelector(store => store.movie?.movieLists)
    const seriesList = useSelector(store => store.movie?.seriesLists)

    return (
        <div className="relative z-20 top-14 md:-top-8 lg:-top-24 2xl:-top-60 3xl:-top-96  w-full pl-5 md:pl-12 bg-black">
            {/* Shimmer UI */}
            {movieList?.length <= 0 && TMDB_MOVIE_LIST_TYPES.map((movieListType) =>
                <CardLayoutShimmer key={movieListType + "abc"} heading={movieListType + " Movies"} />
            )}
            {seriesList?.length <= 0 && TMDB_SERIES_LIST_TYPES.map((seriesListType) =>
                <CardLayoutShimmer key={seriesListType + "xyz"} heading={seriesListType + " Shows"} />
            )}
            {/* Actual Data */}
            {
                TMDB_MOVIE_LIST_TYPES.map((movieListType, index) =>
                    <CardLayout key={movieListType + " Movies"} heading={movieListType + " Movies"} listData={movieList?.[index]} type="m" />
                )
            }
            {
                TMDB_SERIES_LIST_TYPES.map((seriesListType, index) =>
                    <CardLayout key={seriesListType + " Shows"} heading={seriesListType + " Shows"} listData={seriesList?.[index]} type="s" />
                )
            }
            {/* Type "m" for movie, "s" for series */}

        </div>
    )
}

export default MovieSeriesLists