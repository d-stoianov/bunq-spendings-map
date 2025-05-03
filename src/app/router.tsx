import HomePage from '@/app/routes/home'
import LoginPage from '@/app/routes/login'
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom'

const ProtectedRoute: React.FC<{ element: React.JSX.Element }> = ({
    element,
}) => {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return element
}

const AppRouter: React.FC = () => {
    const { user } = useAuth()

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<ProtectedRoute element={<HomePage />} />}
                />
                <Route path="/login" element={<LoginPage />} />

                <Route
                    path="*"
                    element={<Navigate to={user ? '/' : '/login'} replace />}
                />
            </Routes>
        </Router>
    )
}

export default AppRouter
