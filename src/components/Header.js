import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, toggleGptPageState, toggleNoResult } from "../redux/gptSlice";
import { LOGO } from "../utils/constants"
import { SUPPORTED_LANGUAGES } from "../utils/constantsLanguage";

const Header = () => {
    const dispatch = useDispatch()
    const gptPageState = useSelector(store => store.gpt?.gptPage)
    const user = useSelector(store => store.user)

    const handleSetLanguage = (e) => {
        // onClick triggers a event that is captured by e, from which we can get the value
        dispatch(setLanguage(e.target.value))
    }

    const toggleGptPage = () => {
        dispatch(toggleGptPageState())
        dispatch(toggleNoResult(false))
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/")
        }).catch((error) => {
            // An error happened.
            // navigate("/errorpage")
        });
    }

    return (
        <div className="p-3 md:p-8 bg-gradient-to-b from-black w-full flex justify-between items-center absolute md:fixed top-0 z-30">
            <img src={LOGO} className="w-32 md:w-44 xl:w-32 2xl:w-44" alt="" />
            {user && <div className="flex md:p-4 items-center text-sm md:text-base xl:text-sm 2xl:text-base">
                {gptPageState && <select className="text-white bg-gray-900 border-2 border-gray-700 mr-3 md:mr-6 py-1 md:py-2 px-2 md:px-4 cursor-pointer rounded-lg focus:outline-none" onClick={handleSetLanguage}>
                    {SUPPORTED_LANGUAGES.map(language => <option key={language} value={language} className="text-black bg-white">{language}</option>)}
                </select>}
                {!gptPageState && <button className="md:font-bold text-white mr-3 md:mr-6 py-1 md:py-2 px-2 md:px-4 cursor-pointer gradient-border bg-gray-900 active:bg-gray-700" onClick={toggleGptPage}>✦ GPT Search</button>}
                {gptPageState && <button className="md:font-bold text-white mr-3 md:mr-6 py-1 md:py-2 px-2 md:px-4 cursor-pointer bg-red-600 active:bg-red-800 rounded-lg" onClick={toggleGptPage}>Home</button>}
                <img src={user?.photoURL} className="hidden md:block w-10 aspect-square xl:w-8 2xl:w-10 rounded-md cursor-pointer" alt="Profile" />
                <p className="group font-bold text-white md:ml-4 cursor-pointer" onClick={handleSignOut}>
                    <img src="/logout.svg" alt="Logout" className="h-8 md:h-12 xl:h-10 2xl:h-12"/>
                    <span className="absolute right-10 top-30 opacity-0 group-hover:opacity-100 transition-opacity">Sign Out</span>
                </p>
            </div>}
        </div>
    )
}

export default Header