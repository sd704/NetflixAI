import Browse from "./Browse"
import Login from "./Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <ProtectedRoute><Login /></ProtectedRoute>,
        },
        {
            path: "/browse",
            element: <ProtectedRoute><Browse /></ProtectedRoute>,
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body