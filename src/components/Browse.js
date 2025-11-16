import Header from "./Header"
import Trailer from "./Trailer"
import MovieSeriesLists from "./MovieSeriesLists"
import GptSearchPage from "./GptSearchPage"
import useFetchMoviesSeries from "../hooks/useFetchMoviesSeries"
import useFetchTrailer from "../hooks/useFetchTrailer"
import useAddTrailerData from "../hooks/useAddTrailerData"
import { useSelector } from "react-redux";


const Browse = () => {
    const gptPageState = useSelector(store => store.gpt?.gptPage)

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
        </div>
    )
}

export default Browse