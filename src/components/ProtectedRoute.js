import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react"

const ProtectedRoute = ({ children }) => {
    // Dispatch Hook to call reducer functions
    const dispatch = useDispatch()
    // Navigate Hook to navigate to path
    // Navigate can be used where RouterProvider is in parent component
    const navigate = useNavigate()

    // Handling User Sign In, Sign Out and Routing
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Save User info received from firebase
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                // Navigate to Browse if user exists
                navigate("/browse")
            } else {
                // Clear User 
                dispatch(removeUser())
                // Navigate to Login if user doesn't exists
                navigate("/")
            }
        });
    }, [dispatch, navigate])

    return children
}

export default ProtectedRoute