import { useSelector } from "react-redux"
import { YOUTUBE_EMBEDDED_URL } from "../utils/constants"

const Trailer = ({ trailerMovie }) => {
    const trailerKey = useSelector(store => store.movie?.trailerKey)
    // Don't render if trailerKey doesn't exist, "Early Return"
    if (!trailerKey) return
    const { id, title, original_name, overview } = trailerMovie

    return (
        <div className="relative w-full aspect-video overflow-hidden">
            <div className="absolute text-white z-10 w-full h-full pt-[30%] pl-12 bg-gradient-to-t from-black">
                <div className="font-bold text-6xl">{title ? title : original_name}</div>
                <div className="text-xl w-1/3 my-10">{overview}</div>
                <button className="bg-white text-black text-xl rounded-sm px-8 py-2 hover:bg-opacity-70">⯈ Play</button>
                <button className="bg-gray-500 bg-opacity-50 text-white text-xl rounded-sm px-8 py-2 mx-2">🛈 More Info</button>
            </div>
            <iframe
                className="absolute aspect-video w-full"
                src={YOUTUBE_EMBEDDED_URL(trailerKey)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ pointerEvents: 'none' }} >
            </iframe>
        </div>
    )
}

export default Trailer