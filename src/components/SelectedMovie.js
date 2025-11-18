import { TMDB_IMAGE_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const SelectedMovie = () => {
    const selectedItem = useSelector(store => store.gpt?.selectedItem)
    const { name, title, release_date, first_air_date, overview, poster_path } = selectedItem

    if (!overview) return

    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });

    const formatDate = (date) => {
        return formatter.format(new Date(date))
    }

    return (
        <div className="w-11/12 md:w-10/12 lg:w-5/12 mx-auto mt-5 md:mt-8 p-5 rounded-xl bg-black/80 flex flex-col md:flex-row md:items-center text-white">
            <div
                style={{ backgroundImage: `url(${TMDB_IMAGE_URL(poster_path)})` }}
                className="w-64 mx-auto mb-5 md:h-80 md:my-8 md:mx-6 aspect-[2/3] bg-center bg-cover rounded-lg">
            </div>
            <div>
                <p className="font-bold text-xl md:text-2xl mb-5 md:mb-8">{title ? title : name}</p>
                <p className="text-sm md:text-base">{overview}</p>
                <p className="mt-5 text-sm md:text-base">Release: {release_date ? formatDate(release_date) : formatDate(first_air_date)}</p>
            </div>
        </div>
    )
}

export default SelectedMovie