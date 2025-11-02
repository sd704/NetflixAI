import Header from "./Header"
import { BACKDROP } from "../utils/constants"
import useFetchMovies from "../hooks/useFetchMovies"

const Browse = () => {
    useFetchMovies()

    return (
        <div style={{ backgroundImage: `url(${BACKDROP})` }} className="w-screen h-screen bg-center bg-cover">
            <div className="w-full h-full bg-black/40">
                <Header />
            </div>
        </div>

    )
}

export default Browse