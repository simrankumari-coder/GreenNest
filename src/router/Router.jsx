import { createBrowserRouter } from 'react-router'
import Home from "../pages/public/Home"
import About from "../pages/public/About"
import Contact from "../pages/public/Contact"
import PublicLayout from '../components/layout/PublicLayout'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
const Router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            }


        ]
    }
])
export default Router;