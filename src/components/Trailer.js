import { YOUTUBE_EMBEDDED_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowInfo } from "../redux/movieSlice";

const Trailer = () => {
    const dispatch = useDispatch()
    const trailerData = useSelector(store => store.movie?.trailerData)
    const trailerKey = useSelector(store => store.movie?.trailerKey)

    // Don't render if data doesn't exist, "Early Return"
    if (!trailerData) return
    // if (!(trailerData.id in trailerKey)) return

    const { id, title, name, overview } = trailerData

    const toggleInfo = () => {
        dispatch(toggleShowInfo())
    }

    return (
        <div className="relative top-16 md:top-0 w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-video overflow-hidden">
            {/* TRAILER TEXT */}
            <div className="absolute text-white z-10 w-full h-full pt-[30%] px-5 md:px-12 bg-gradient-to-t from-black">
                <div className="font-bold text-2xl md:text-4xl 2xl:text-6xl line-clamp-2 lg:line-clamp-1">{title ? title : name}</div>
                <div className="text-xs md:text-base 2xl:text-xl xl:w-1/2 my-3 xl:my-10 line-clamp-3">{overview}</div>
                <button className="bg-white text-black text-xs md:text-base 2xl:text-xl rounded-sm px-8 py-2 hover:bg-opacity-70">&#x25B8; Play</button>
                <button className="bg-gray-500 bg-opacity-50 hover:bg-red-600 active:bg-red-800 text-white text-xs md:text-base 2xl:text-xl rounded-sm px-8 py-2 mx-2" onClick={toggleInfo}>&#x24D8; More Info</button>
            </div>
            {/* TRAILER VIDEO */}
            {id in trailerKey ? <iframe
                className="absolute aspect-video w-full"
                src={YOUTUBE_EMBEDDED_URL(trailerKey[id])}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ pointerEvents: 'none' }} >
            </iframe> :
                <div className="absolute aspect-video w-full bg-black">
                </div>
            }

        </div>
    )
}

export default Trailer