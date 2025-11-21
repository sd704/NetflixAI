import SelectedMovie from "./SelectedMovie";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowInfo } from "../redux/movieSlice";

const MoreInfo = () => {
    const dispatch = useDispatch()
    const trailerData = useSelector(store => store.movie?.trailerData)

    const toggleInfo = () => {
        dispatch(toggleShowInfo())
    }

    return (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-70 flex flex-col items-center justify-center" >
            <SelectedMovie selectedItem={trailerData} />
            <button className="md:font-bold text-white py-1 md:py-2 px-2 md:px-4 cursor-pointer bg-red-600 active:bg-red-800 rounded-lg text-sm md:text-base xl:text-sm 2xl:text-base w-11/12 md:w-10/12 xl:w-6/12 2xl:w-5/12" onClick={toggleInfo}>Close</button>
        </div>
    )
}

export default MoreInfo