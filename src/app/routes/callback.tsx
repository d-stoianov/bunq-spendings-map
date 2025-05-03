import queryString from 'query-string'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CallbackPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        // Get the query params from the URL
        const queryParams = queryString.parse(window.location.search)

        // Check if the authorization code exists
        const { code, error } = queryParams

        if (error) {
            console.error('OAuth error: ', error)
            return
        }

        if (code) {
            // Here you have the authorization code
            console.log('Authorization code:', code)
        } else {
            console.error('No authorization code found')
        }
    }, [history])

    return <div>Processing your authentication...</div>
}

export default CallbackPage
