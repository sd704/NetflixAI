import { useEffect } from "react"
import Browse from "./Browse"
import Login from "./Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    // Dispatch Hook to call reducer functions
    const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        }
    ])

    // Handling User Sign In and Sign Out
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Save User info received from firebase
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            } else {
                // Clear User 
                dispatch(removeUser())
            }
        });
    }, [dispatch])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body