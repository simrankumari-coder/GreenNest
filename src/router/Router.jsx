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
import ShopPage from '../pages/customer/ShopPage'
import Cart from '../pages/customer/Cart'
import CheckoutPage from '../pages/customer/CheckoutPage'
import OrderConfirmation from '../pages/customer/OrderConfirmation'
import MyOrders from '../pages/customer/MyOrders'
import BookService from '../pages/customer/BookService'
import BookingConfirmation from '../pages/customer/BookingConfirmation'
import MyBookings from '../pages/customer/MyBookings'
import MyProfile from '../pages/customer/MyProfile'
import AddProduct from '../pages/vendor/AddProduct'
import MyProducts from '../pages/vendor/MyProducts'
import EditProduct from '../pages/vendor/EditProduct'
import VendorProfile from '../pages/vendor/VendorProfile'
import GardenerBookings from '../pages/gardener/GardenerBookings'
import GardenerProfile from '../pages/gardener/GardenerProfile'
import ProtectedRoute from '../components/common/ProtectedRoute'
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
            },
            {
                path: "services/:serviceId/book-service",
                element: <BookService />
            },
            {
                path: "shop",
                element: <ShopPage />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "checkout",
                element: <CheckoutPage />
            },

            {
                path: "orderConfirmation/:orderId",
                element: <OrderConfirmation />

            },
            {
                path: "confirm-booking/:bookingId",
                element: <BookingConfirmation />
            },
        ]
    },
    {
        path: "/customer",
        element: <ProtectedRoute allowedRole="Customer" />,
        children: [

            {
                element: <DashboardLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <CustomerDashboard />
                    },
                    {
                        path: "orders",
                        element: <MyOrders />
                    },
                    {
                        path: "bookings",
                        element: <MyBookings />
                    },
                    {
                        path: "profile",
                        element: <MyProfile />
                    }
                ]
            }
        ]
    },

    {
        path: "/vendor",
        element: <ProtectedRoute allowedRole="Vendor" />,
        children: [

            {
                element: <DashboardLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <VendorDashboard />
                    },
                    {
                        path: "add-product",
                        element: <AddProduct />
                    },
                    {
                        path: "products",
                        element: <MyProducts />
                    },
                    {
                        path: "products/edit-product/:productId",
                        element: <EditProduct />
                    },
                    {
                        path: "profile",
                        element: <VendorProfile />
                    }
                ]
            }
        ]
    },
    {
        path: "/gardener",

        element: <ProtectedRoute allowedRole="Gardener" />,
        children: [

            {
                element: <DashboardLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <GardenerDashboard />
                    },
                    {
                        path: "mybookings",
                        element: <GardenerBookings />
                    },
                    {
                        path: "profile",
                        element: <GardenerProfile />
                    }
                ]
            }
        ]
    }
])
export default Router;