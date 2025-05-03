import Spinner from '@/components/Spinner'
import { useHome } from '@/context/HomeContext'
import React, { useState } from 'react'

const MapSummary: React.FC<{ onClick: () => Promise<void> }> = ({
    onClick,
}) => {
    const { places, showViewMorePlaces } = useHome()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onViewMoreClick = async () => {
        setIsLoading(true)
        await onClick()
        setIsLoading(false)
    }

    return (
        <div className="mx-auto max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Explore Your Top Suggested Places
            </h2>
            <p className="text-lg text-gray-700">
                We’ve discovered{' '}
                <span className="font-semibold">{places.length}</span> amazing
                places tailored just for you! These recommendations are
                personalized based on various factors, based of your bunq
                account.
            </p>
            {isLoading ? (
                <div className='flex justify-center items-center'>
                    <Spinner />
                </div>
            ) : (
                showViewMorePlaces && (
                    <div className='mt-4'>
                        <p className="text-lg text-indigo-600">
                            Want to see more places?{' '}
                            <button
                                onClick={onViewMoreClick}
                                className="font-semibold hover:underline"
                            >
                                Click here
                            </button>{' '}
                            to explore further.
                        </p>
                        <button
                            className="mt-6 w-full rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700"
                            onClick={onViewMoreClick}
                        >
                            View More Places
                        </button>
                    </div>
                )
            )}
        </div>
    )
}

export default MapSummary
