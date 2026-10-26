import { createBrowserRouter } from 'react-router'
import Home from "../pages/public/Home"
import About from "../pages/public/About"
import Contact from "../pages/public/Contact"
import PublicLayout from '../components/layout/PublicLayout'
import CategoryPage from '../pages/customer/CategoryPage'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import ProductDetails from '../pages/customer/ProductDetails'
import GardeningServices from '../pages/public/GardeningServices'
import ServiceDetails from '../pages/customer/ServiceDetails'
import DashboardLayout from '../components/layout/DashboardLayout'
import CustomerDashboard from '../pages/customer/CustomerDashboard'
import VendorDashboard from '../pages/vendor/VendorDashboard'
import GardenerDashboard from '../pages/gardener/GardenerDashboard'
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
            },
            {
                path: "categories/:categoryId",
                element: <CategoryPage />
            },
            {
                path: "products/:productId",
                element: <ProductDetails />
            },
            {
                path: "services",
                element: <GardeningServices />
            },
            {
                path: "services/:serviceId",
                element: <ServiceDetails />
            }
        ]
    },
    {
        path: "/customer",
        element: <DashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: <CustomerDashboard />
            }
        ]
    },
    {
        path: "/vendor",
        element: <DashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: <VendorDashboard />
            }
        ]
    },
    {
        path: "/gardener",
        element: <DashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: <GardenerDashboard />
            }
        ]
    }
])
export default Router;