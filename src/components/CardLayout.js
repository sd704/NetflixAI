import { TMDB_IMAGE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTrailerData, addTrailerType } from "../redux/movieSlice"

const CardLayout = ({ heading, listData, type }) => {
    const dispatch = useDispatch()

    const switchTrailer = (item) => {
        dispatch(addTrailerData(item))
        dispatch(addTrailerType(type))
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="text-white my-5 md:my-8">
            <p className="text-lg md:text-xl 2xl:text-3xl font-bold my-4">{heading}</p>
            <div id="carousel" className="flex overflow-x-auto no-scrollbar space-x-4 snap-x snap-mandatory scroll-smooth items-center">
                {listData?.map((item) =>
                    <div
                        key={item.id}
                        id={item.id}
                        style={{ backgroundImage: `url(${TMDB_IMAGE_URL(item.poster_path)})` }}
                        className="flex-shrink-0 h-64 md:h-80 xl:h-64 2xl:h-80 my-2 md:my-8 aspect-[2/3] bg-center bg-cover rounded-lg snap-start cursor-pointer active:border-2 active:border-white xl:active:border-0 xl:hover:h-72 2xl:hover:h-96 md:hover:my-0 md:hover:shadow-lg"
                        onClick={() => switchTrailer(item)}>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardLayout