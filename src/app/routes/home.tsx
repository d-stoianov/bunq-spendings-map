import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    console.log('user', user)

    return (
        <div>
            <h1>Home page</h1>
            <button
                onClick={() => {
                    logout()
                    navigate('/login')
                }}
            >
                logout
            </button>
        </div>
    )
}

export default HomePage
