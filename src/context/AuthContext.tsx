import React, { createContext, useContext, useState } from 'react'

export interface User {
    name: string
    image: string | null
}

interface AuthContextProps {
    user: User | null
    login: () => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: async () => {},
    logout: async () => {},
})

const mockUser: User = {
    name: 'dima',
    image: null,
}

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(mockUser)

    const login = async () => {
        setUser(mockUser)
    }

    const logout = async () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{
                user: user,
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
