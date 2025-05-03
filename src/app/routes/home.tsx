import MapIndicatorsOverview from '@/features/map-indicators/MapIndicatorsOverview'
import Map from '@/features/map/Map'
import mapService, { MapIndicator, Place } from '@/features/map/map-service'
import Profile from '@/features/user-profile/Profile'
import useIsMobile from '@/utils/isMobile'
import React, { useEffect, useState } from 'react'

const HomePage: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>([])
    const [mapIndicators, setMapIndicators] = useState<MapIndicator[]>([])

    const isMobile = useIsMobile()

    useEffect(() => {
        async function fetchPlaces() {
            const places = await mapService.getPlaces()
            const mapIndicators = mapService.getIndicators()
            setPlaces(places)
            setMapIndicators(mapIndicators)
        }

        fetchPlaces()
    }, [])

    return (
        <div className="flex h-screen flex-col items-center">
            <header className="w-full bg-gradient-to-r from-indigo-600 to-indigo-900 py-6 text-white shadow-md">
                <div className="text-center">
                    <h1 className="mb-4 text-3xl font-bold">
                        Explore Some Places Based On Others Experiece
                    </h1>
                    <p className="text-lg text-gray-300">
                        Whether you're looking for a cozy cafe, a unique
                        shopping spot, or a relaxing park, we're here to help
                        you discover the best places around you. Let us guide
                        you to your next favorite spot!
                    </p>
                </div>
            </header>
            <main className="flex w-full flex-col items-center justify-center gap-6 py-8 md:px-0 px-8 md:flex-row md:items-start md:justify-around">
                {isMobile ? (
                    <div className="flex w-full items-center justify-around">
                        <MapIndicatorsOverview indicators={mapIndicators} />
                        <Profile />
                    </div>
                ) : (
                    <div className="flex w-full justify-center md:w-1/5">
                        <MapIndicatorsOverview indicators={mapIndicators} />
                    </div>
                )}
                <div className="flex w-full items-center justify-center md:w-3/5">
                    <Map places={places} />
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
