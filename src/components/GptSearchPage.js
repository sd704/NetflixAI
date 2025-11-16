import { BACKDROP } from "../utils/constants"

const GptSearchPage = () => {
    return (
        <div style={{ backgroundImage: `url(${BACKDROP})` }} className="w-screen h-screen bg-center bg-cover fixed">
            <div className="w-full h-full bg-black/40 pt-80">
                <form className="w-5/12 mx-auto p-5 rounded-xl bg-black/80 flex text-lg" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="What would you like to watch today?" className="w-5/6 p-4 rounded-lg focus:outline-none placeholder-slate-500" />
                    <button className="font-bold text-white w-1/6 ml-4 p-4 cursor-pointer bg-red-600 active:bg-red-800 rounded-lg">Search</button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchPage