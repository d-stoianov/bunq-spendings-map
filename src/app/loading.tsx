import React from 'react'

const LoadingPage: React.FC = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-solid border-blue-500"></div>
                <p className="text-lg font-medium text-gray-700">Loading...</p>
            </div>
        </div>
    )
}

export default LoadingPage
