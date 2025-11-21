import Header from "./Header"
import Trailer from "./Trailer"
import MovieSeriesLists from "./MovieSeriesLists"
import GptSearchPage from "./GptSearchPage"
import useFetchMoviesSeries from "../hooks/useFetchMoviesSeries"
import useFetchTrailer from "../hooks/useFetchTrailer"
import useAddTrailerData from "../hooks/useAddTrailerData"
import { useSelector } from "react-redux";
import MoreInfo from "./MoreInfo"

const Browse = () => {
    const gptPageState = useSelector(store => store.gpt?.gptPage)
    const showInfo = useSelector(store => store.movie?.showInfo)

    useFetchMoviesSeries()
    useAddTrailerData()
    useFetchTrailer()

    return (
        <div className="bg-black pb-1">
            <Header />
            {gptPageState ?
                <GptSearchPage /> :
                <>
                    <Trailer />
                    <MovieSeriesLists />
                </>
            }
            {showInfo && <MoreInfo />}
        </div>
    )
}

export default Browse