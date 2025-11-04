import Header from "./Header"
import Trailer from "./Trailer"
import CardLayout from "./CardLayout"
import useFetchMovies from "../hooks/useFetchMovies"

const Browse = () => {
    useFetchMovies()
   
    return (
        <div className="bg-black">
            <Header />
            <Trailer />
            <CardLayout />
        </div >
    )
}

export default Browse