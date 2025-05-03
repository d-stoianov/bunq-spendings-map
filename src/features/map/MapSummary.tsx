import { useHome } from '@/context/HomeContext'
import React from 'react'
import { Link } from 'react-router-dom'

const MapSummary: React.FC = () => {
    const { places } = useHome()

    return (
        <div className="mx-auto max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Explore Your Top Suggested Places
            </h2>
            <p className="mb-6 text-lg text-gray-700">
                We’ve discovered{' '}
                <span className="font-semibold">{places.length}</span> amazing
                places tailored just for you! These recommendations are
                personalized based on various factors, based of your bunq
                account.
            </p>
            <p className="text-lg text-indigo-600">
                Want to see more places?{' '}
                <Link to="" className="font-semibold hover:underline">
                    Click here
                </Link>{' '}
                to explore further.
            </p>
            <button
                className="mt-6 w-full rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700"
                onClick={() => {}}
            >
                View More Places
            </button>
        </div>
    )
}

export default MapSummary
