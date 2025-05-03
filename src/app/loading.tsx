import React from 'react'

const LoadingPage: React.FC = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center gap-0 text-center">
                <p className="text-lg font-medium text-gray-700">Loading...</p>
            </div>
        </div>
    )
}

export default LoadingPage
