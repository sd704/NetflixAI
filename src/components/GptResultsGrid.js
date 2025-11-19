import { TMDB_IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../redux/gptSlice";

const GptResultsGrid = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(store => store.gpt?.isLoading)
    const noResult = useSelector(store => store.gpt?.noResult)
    const gptResults = useSelector(store => store.gpt?.gptResults)
    const filteredResults = gptResults.filter(item => item?.poster_path)

    const handleSelectedItem = ({ name, title, release_date, first_air_date, overview, poster_path }) => {
        dispatch(setSelectedItem({ name: name, title: title, release_date: release_date, first_air_date: first_air_date, overview: overview, poster_path: poster_path }))
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="flex justify-center w-full mt-8">
            {filteredResults?.length > 0 && <div id="grid" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 px-4 max-w-7xl ">
                {filteredResults?.map((item) => <div className="flex items-center justify-center">
                    <div
                        key={item.id}
                        id={item.id}
                        style={{ backgroundImage: `url(${TMDB_IMAGE_URL(item.poster_path)})` }}
                        className="flex-shrink-0 h-64 md:h-80 xl:h-64 2xl:h-80 m-2 md:my-8 md:mx-6 aspect-[2/3] bg-center bg-cover rounded-lg cursor-pointer active:border-2 active:border-white xl:active:border-0 xl:hover:h-72 2xl:hover:h-96 xl:hover:my-0 xl:hover:mx-0 xl:hover:shadow-lg transition-all"
                        onClick={() => handleSelectedItem(item)}>
                    </div>
                </div>)}
            </div>}
            {isLoading &&
                <div id="grid" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 px-4 max-w-7xl ">
                    {[...Array(15)].map((_, i) => (<div className="flex items-center justify-center">
                        < div
                            key={i}
                            className="flex-shrink-0 h-64 md:h-80 xl:h-64 2xl:h-80 m-2 md:my-8 md:mx-6 aspect-[2/3] shimmer-background rounded-lg cursor-pointer transition-all">
                        </div>
                    </div>))}
                </div>
            }
            {noResult && <p className="font-bold text-3xl text-white">No match found.</p>}
        </div >
    )
}

export default GptResultsGrid