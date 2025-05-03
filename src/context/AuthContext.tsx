import React, { createContext, useContext, useState } from 'react'

const CLIENT_ID = import.meta.env.VITE_OAUTH_CLIENT_ID

export interface User {
    firstName: string
    lastName: string
    image: string | null
}

interface AuthContextProps {
    user: User | null
    setUser: (user: User | null) => void
    login: () => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
    login: async () => {},
    logout: async () => {},
})

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null)

    const login = async () => {
        const redirectUri = encodeURIComponent('http://localhost:5173')
        const url = `https://oauth.sandbox.bunq.com/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${redirectUri}`
        window.location.replace(url)
    }

    const logout = async () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('No auth context')
    }

    return context
}

export { AuthProvider, useAuth }
