import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants"

const Header = () => {
    const user = useSelector(store => store.user)

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
        <div className="px-8 py-8 bg-gradient-to-b from-black w-full flex justify-between">
            <img src={LOGO} className="w-44" alt="" />
            {user && <div className="flex p-4 items-center">
                <img src={user?.photoURL} className="w-10 h-10 rounded-md cursor-pointer" alt="User Icon" />
                <p className="font-bold text-red-600 ml-4 cursor-pointer" onClick={handleSignOut}>Sign Out</p>
            </div>}
        </div>
    )
}

export default Header