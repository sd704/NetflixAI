import { TMDB_IMAGE_URL } from "../utils/constants"

const CardLayout = ({ heading, listData, type, setTrailerMovie }) => {

    const switchTrailer = (item) => {
        setTrailerMovie([item, type])
    }

    return (
        <div className="text-white my-8">
            <p className="text-3xl font-bold my-4">{heading}</p>
            <div id="carousel" className="flex overflow-x-auto no-scrollbar space-x-4 snap-x snap-mandatory scroll-smooth">
                {listData?.map((item) =>
                    <div
                        key={item.id}
                        id={item.id}
                        style={{ backgroundImage: `url(${TMDB_IMAGE_URL(item.poster_path)})` }}
                        className="flex-shrink-0 h-80 my-8 aspect-[2/3] bg-center bg-cover rounded-lg snap-start cursor-pointer hover:h-96 hover:my-0"
                        onClick={() => switchTrailer(item)}>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardLayout