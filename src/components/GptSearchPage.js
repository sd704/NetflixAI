import { useRef } from "react";
import langData from "../utils/constantsLanguage"
import { useDispatch, useSelector } from "react-redux";
import groqChat from "../utils/groqChat"
import tmdbSearch from "../utils/tmdbSearch";
import { BACKDROP, GPT_QUERY } from "../utils/constants";
import { addGptResults, setSelectedItem, toggleLoading } from "../redux/gptSlice";
import SelectedMovie from "./SelectedMovie";
import GptResultsGrid from "./GptResultsGrid";

const GptSearchPage = () => {
    const dispatch = useDispatch()
    const language = useSelector(store => store.gpt?.language)
    const gptResults = useSelector(store => store.gpt?.gptResults)

    const message = useRef(null)

    const handleGPTSearch = async () => {
        if (!message.current.value.length) return
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
            dispatch(addGptResults(searchList))
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
            <div className={`relative z-10 ${gptResults.length ? 'mt-40' : 'mt-80'}`}>
                <form className="w-5/12 mx-auto p-5 rounded-xl bg-black/80 flex text-lg" onSubmit={(e) => e.preventDefault()}>
                    <input ref={message} type="text" placeholder={langData[language].gptPlaceholder} className="w-5/6 p-4 rounded-lg focus:outline-none placeholder-slate-500" />
                    <button className="font-bold text-white w-1/6 ml-4 p-4 cursor-pointer bg-red-600 active:bg-red-800 rounded-lg" onClick={handleGPTSearch}>{langData[language].searchButton + " ✦"}</button>
                </form>
                <SelectedMovie />
                <GptResultsGrid />
            </div>
        </div>
    )
}

export default GptSearchPage