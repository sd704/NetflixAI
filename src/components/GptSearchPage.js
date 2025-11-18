import { useRef } from "react";
import langData from "../utils/constantsLanguage"
import { useDispatch, useSelector } from "react-redux";
import groqChat from "../utils/groqChat"
import tmdbSearch from "../utils/tmdbSearch";
import { BACKDROP, GPT_QUERY } from "../utils/constants";
import { addGptResults, setSelectedItem, toggleLoading, toggleNoResult } from "../redux/gptSlice";
import SelectedMovie from "./SelectedMovie";
import GptResultsGrid from "./GptResultsGrid";

const GptSearchPage = () => {
    const dispatch = useDispatch()
    const language = useSelector(store => store.gpt?.language)
    const selectedItem = useSelector(store => store.gpt?.selectedItem)

    const message = useRef(null)

    const handleGPTSearch = async () => {
        if (!message.current.value.length) return
        dispatch(toggleNoResult(false))
        dispatch(setSelectedItem({}))
        dispatch(addGptResults([]))
        dispatch(toggleLoading())
        const query = message.current.value + GPT_QUERY
        try {
            // Make API call to GROQ
            const groqData = await groqChat(query)
            // Make API call to TMDB
            const searchList = await tmdbSearch(groqData)
            dispatch(toggleLoading())
            searchList.length ? dispatch(addGptResults(searchList)) : dispatch(toggleNoResult(true))
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${BACKDROP})` }} className="inset-0 bg-center bg-cover fixed ">
                <div className="w-full h-full bg-black/40">
                </div>
            </div>
            <div className={`relative z-10 mt-20 ${selectedItem?.overview ? 'md:mt-40' : 'md:mt-80'}`}>
                <form className="w-11/12 md:w-10/12 lg:w-5/12 mx-auto p-5 rounded-xl bg-black/80 flex flex-col md:flex-row text-sm md:text-lg" onSubmit={(e) => e.preventDefault()}>
                    <input ref={message} type="text" placeholder={langData[language].gptPlaceholder} className="w-full box-border md:w-9/12 lg:w-10/12 p-2 md:p-4 rounded-lg focus:outline-none placeholder-slate-500 placeholder:text-center md:placeholder:text-left" />
                    <button className="font-bold text-white w-6/12 md:w-3/12 lg:w-2/12 mx-auto mt-2 md:mr-0 md:ml-5 md:my-0 p-2 md:p-4 cursor-pointer bg-red-600 active:bg-red-800 rounded-lg" onClick={handleGPTSearch}>{langData[language].searchButton + " ✦"}</button>
                </form>
                <SelectedMovie />
                <GptResultsGrid />
            </div>
        </div>
    )
}

export default GptSearchPage