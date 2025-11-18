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
    }

    return (
        <div className="flex justify-center w-full mt-8">
            <div id="grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 px-4 max-w-7xl ">
                {filteredResults?.map((item) => <div
                    key={item.id}
                    id={item.id}
                    style={{ backgroundImage: `url(${TMDB_IMAGE_URL(item.poster_path)})` }}
                    className="flex-shrink-0 h-80 my-8 mx-6 aspect-[2/3] bg-center bg-cover rounded-lg cursor-pointer hover:h-96 hover:my-0 hover:mx-0 hover:shadow-lg transition-all"
                    onClick={() => handleSelectedItem(item)}>
                </div>)}
                {isLoading && [...Array(5)].map((_, i) => (< div
                    key={i}
                    className="flex-shrink-0 h-80 my-8 mx-6 aspect-[2/3] shimmer-background rounded-lg cursor-pointer transition-all">
                </div>))}
            </div>
            {noResult && <p className="font-bold text-3xl text-white">No match found.</p>}
        </div >
    )
}

export default GptResultsGrid