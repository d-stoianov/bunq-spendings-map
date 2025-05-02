import AppRouter from '@/app/router'
import { AuthProvider } from '@/context/AuthContext'

const App = () => {
    // later add auth context here
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}

export default App
