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
        <div className="w-5/12 mx-auto p-5 rounded-xl bg-black/80 flex items-center text-white mt-8">
            <div
                style={{ backgroundImage: `url(${TMDB_IMAGE_URL(poster_path)})` }}
                className="h-80 my-8 mx-6 aspect-[2/3] bg-center bg-cover rounded-lg">
            </div>
            <div>
                <p className="font-bold text-2xl mb-8">{title ? title : name}</p>
                <p>{overview}</p>
                <p className="mt-4">Release: {release_date ? formatDate(release_date) : formatDate(first_air_date)}</p>
            </div>
        </div>
    )
}

export default SelectedMovie