import bunqLogo from '@/assets/bunq-logo.png'
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    return (
        <main className="flex h-full items-center justify-center bg-slate-800">
            <button
                className="cursor-pointer"
                onClick={() => {
                    login()
                    navigate('/')
                }}
            >
                <img src={bunqLogo} alt="bunq-logo" className="w-[250px]" />
            </button>
        </main>
    )
}

export default LoginPage
