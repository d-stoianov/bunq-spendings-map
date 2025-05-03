import bunqLogo from '@/assets/bunq-logo.png'
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
    const { login } = useAuth()

    const navigate = useNavigate()

    return (
        <main className="flex h-screen items-center justify-center md:bg-slate-800">
            <div className="flex max-w-[500px] flex-col gap-4 rounded-lg bg-white p-6 text-center md:shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900">
                    Discover New Places Based on Your Spending
                </h1>

                <p className="text-lg text-gray-700">
                    Login to explore personalized location suggestions tailored
                    to your spending habits. We’ll guide you to the best places
                    in your area—from cafes to hidden gems—so you can discover
                    new spots that match your lifestyle!
                </p>

                <div className="flex w-full flex-col items-center justify-center gap-2">
                    <img
                        src={bunqLogo}
                        alt="bunq-logo"
                        className="mx-auto w-[200px]"
                    />
                    <button
                        className="w-fit rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-indigo-700"
                        onClick={() => {
                            login()
                            navigate('/')
                        }}
                    >
                        Log In with bunq
                    </button>
                </div>

                <p className="text-sm text-gray-500">
                    By logging in, you give us permission to access your data
                    and use it to personalize your experience.
                </p>
            </div>
        </main>
    )
}

export default LoginPage
