import React, { createContext, useContext, useState } from 'react'

export interface User {
    firstName: string
    lastName: string
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
    firstName: 'Dima',
    lastName: 'Slav',
    image: null,
}

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(mockUser)

    const login = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
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
