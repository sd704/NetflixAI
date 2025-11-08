import Header from "./Header"
import Trailer from "./Trailer"
import CardLayout from "./CardLayout"
import useFetchMovies from "../hooks/useFetchMovies"

const Browse = () => {
    useFetchMovies()

    return (
        <div className="bg-black pb-1 ">
            <Header />
            <Trailer />
            <div className="relative -top-96 z-20 w-full pl-12">
                <CardLayout heading="Now Playing" />
                <CardLayout heading="Series Playing" />
                <CardLayout heading="Doc Playing" />
            </div>
        </div >
    )
}

export default Browse