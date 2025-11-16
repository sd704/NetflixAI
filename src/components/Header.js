import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptPageState } from "../redux/gptSlice";
import { LOGO } from "../utils/constants"


const Header = () => {
    const dispatch = useDispatch()
    const gptPageState = useSelector(store => store.gpt?.gptPage)
    const user = useSelector(store => store.user)

    const toggleGptPage = () => {
        dispatch(toggleGptPageState())
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
        <div className="px-8 py-8 bg-gradient-to-b from-black w-full flex justify-between fixed top-0 z-30">
            <img src={LOGO} className="w-44" alt="" />
            {user && <div className="flex p-4 items-center">
                {!gptPageState && <button className="font-bold text-white mr-6 py-2 px-4 cursor-pointer gradient-border" onClick={toggleGptPage}>GPT Search</button>}
                {gptPageState && <button className="font-bold text-white mr-6 py-2 px-4 cursor-pointer bg-red-600 active:bg-red-800 rounded-lg" onClick={toggleGptPage}>Home</button>}
                <img src={user?.photoURL} className="w-10 h-10 rounded-md cursor-pointer" alt="Profile" />
                <p className="group font-bold text-white ml-4 cursor-pointer" onClick={handleSignOut}>
                    <img src="/logout.svg" alt="Logout" />
                    <span className="absolute right-10 top-30 opacity-0 group-hover:opacity-100 transition-opacity">Sign Out</span>
                </p>
            </div>}
        </div>
    )
}

export default Header