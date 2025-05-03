import CallbackPage from '@/app/routes/callback'
import HomePage from '@/app/routes/home'
import LoginPage from '@/app/routes/login'
import { HomeProvider } from '@/context/HomeContext'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomeProvider>
                            <HomePage />
                        </HomeProvider>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/callback" element={<CallbackPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
