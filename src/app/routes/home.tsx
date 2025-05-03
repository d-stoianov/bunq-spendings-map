import MapIndicatorsOverview from '@/features/map-indicators/MapIndicatorsOverview'
import Map from '@/features/map/Map'
import mapService, { MapIndicator, Place } from '@/features/map/map-service'
import Profile from '@/features/user-profile/Profile'
import React, { useEffect, useState } from 'react'

const HomePage: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>([])
    const [mapIndicators, setMapIndicators] = useState<MapIndicator[]>([])

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
            <header className="py-4">
                <h1 className="text-2xl">Your personalized suggestions 💰</h1>
            </header>
            <main className="flex w-full justify-around">
                <div className="flex w-1/5 justify-center">
                    <MapIndicatorsOverview indicators={mapIndicators} />
                </div>
                <div className="flex w-3/5 items-center justify-center">
                    <Map places={places} />
                </div>
                <div className="flex w-1/5 justify-center">
                    <Profile />
                </div>
            </main>
        </div>
    )
}

export default HomePage
