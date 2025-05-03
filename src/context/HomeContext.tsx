import { GOOGLE_MAPS_API_KEY } from '@/features/map/constants'
import mapService, { MapIndicator, Place } from '@/features/map/map-service'
import { useJsApiLoader } from '@react-google-maps/api'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface HomeContextProps {
    isLoading: boolean
    places: Place[]
    showViewMorePlaces: boolean
    loadMorePlaces: () => Promise<void>
    mapIndicators: MapIndicator[]
}

const HomeContext = createContext<HomeContextProps>({
    isLoading: false,
    places: [],
    loadMorePlaces: async () => {},
    showViewMorePlaces: true,
    mapIndicators: [],
})

const HomeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [places, setPlaces] = useState<Place[]>([])
    const [mapIndicators, setMapIndicators] = useState<MapIndicator[]>([])
    const [isMapServiceLoading, setIsMapServiceLoading] =
        useState<boolean>(false)
    const [showViewMorePlaces, setShowViewMorePlaces] = useState<boolean>(true)

    // load google api
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['geometry', 'drawing'],
    })

    useEffect(() => {
        async function fetchPlaces() {
            setIsMapServiceLoading(false)
            const places = await mapService.getPlaces()
            const mapIndicators = mapService.getIndicators()
            setPlaces(places)
            setMapIndicators(mapIndicators)
            setIsMapServiceLoading(false)
        }

        fetchPlaces()
    }, [])

    const loadMorePlaces = async () => {
        const newPlaces = await mapService.getExtraPlaces(places)
        const newMapIndicators = mapService.getIndicators()

        setPlaces(newPlaces)
        setMapIndicators(newMapIndicators)
        setShowViewMorePlaces(false)
    }

    // loading state (either google api or service)
    const isLoading = isMapServiceLoading || !isLoaded

    return (
        <HomeContext.Provider
            value={{
                places,
                showViewMorePlaces,
                loadMorePlaces,
                mapIndicators,
                isLoading,
            }}
        >
            {children}
        </HomeContext.Provider>
    )
}

const useHome = () => {
    const context = useContext(HomeContext)

    if (!context) {
        throw new Error('No home context')
    }

    return context
}

export { HomeProvider, useHome }
