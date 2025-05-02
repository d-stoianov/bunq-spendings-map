import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            <h1>LOGIN PAGE</h1>

            <button
                onClick={() => {
                    login()
                    navigate('/')
                }}
            >
                login
            </button>
        </div>
    )
}

export default LoginPage
