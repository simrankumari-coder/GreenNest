import React from 'react'
import { Navigate, Outlet } from 'react-router'
const ProtectedRoute = ({ allowedRole }) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {}
    if (!loggedInUser.id) {
        return <Navigate to="/login" replace />
    }
    if (loggedInUser.role !== allowedRole) {
        return <Navigate to="/login" replace />
    }
    return <Outlet />
}

export default ProtectedRoute
