import LoadingPage from '@/app/loading'
import { useHome } from '@/context/HomeContext'
import Map from '@/features/map/Map'
import MapIndicatorsOverview from '@/features/map/MapIndicatorsOverview'
import MapSummary from '@/features/map/MapSummary'
import Profile from '@/features/user-profile/Profile'
import useIsMobile from '@/utils/isMobile'
import React from 'react'

const HomePage: React.FC = () => {
    const { isLoading, loadMorePlaces } = useHome()

    const isMobile = useIsMobile()

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <div className="flex h-screen flex-col items-center">
            <header className="w-full bg-indigo-600 py-6 text-white shadow-md">
                <div className="text-center">
                    <h1 className="mb-4 text-3xl font-bold">
                        Discover Top Places Tailored Just for You
                    </h1>
                    <p className="text-lg text-gray-300">
                        We’ve handpicked the best spots based on your
                        preferences and activity. Whether it's a cozy cafe, a
                        night bar, or a must-visit museum, we’ve got
                        personalized recommendations ready for you!
                    </p>
                </div>
            </header>
            <main className="flex w-full flex-col items-center justify-center gap-6 px-8 py-8 md:flex-row md:items-start md:justify-around md:px-4">
                {isMobile ? (
                    <>
                        <Profile />
                        <MapSummary onClick={loadMorePlaces} />
                        <div className="flex w-full items-start">
                            <MapIndicatorsOverview />
                        </div>
                    </>
                ) : (
                    <div className="flex w-full flex-col justify-center gap-6 md:w-1/5">
                        <MapSummary onClick={loadMorePlaces} />
                        <MapIndicatorsOverview />
                    </div>
                )}
                <div className="flex w-full items-center justify-center md:w-3/5">
                    <Map />
                </div>
                {!isMobile && (
                    <div className="flex w-full justify-center md:w-1/5">
                        <Profile />
                    </div>
                )}
            </main>
            <footer className="w-full bg-gray-900 py-6 text-white">
                <div className="text-center">
                    <p className="text-sm">
                        Made with ❤️ to help you discover new places and
                        experiences.
                    </p>
                    <p className="text-xs text-gray-400">
                        © 2025 ChillSlavs. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default HomePage
