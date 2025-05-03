import {
    AMSTERDAM_COORDINATES,
    GOOGLE_MAPS_API_KEY,
    mapContainerStyle,
    NETHERLANDS_BOUNDS,
} from '@/features/map/constants'
import mapService, { Place } from '@/features/map/map-service'
import '@/features/map/map-styles.css'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

const Map: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>([])
    const [mapLoaded, setMapLoaded] = useState(false)

    useEffect(() => {
        async function fetchPlaces() {
            const places = await mapService.getPlaces()
            setPlaces(places)
        }

        fetchPlaces()
    }, [])

    console.log(places)

    return (
        <LoadScript
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
            onLoad={() => setMapLoaded(true)}
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={AMSTERDAM_COORDINATES}
                zoom={1}
                options={{
                    disableDefaultUI: true,
                    zoomControl: false,
                    keyboardShortcuts: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    draggable: true,
                    gestureHandling: 'greedy',
                    scrollwheel: true,
                    disableDoubleClickZoom: true,
                    restriction: {
                        latLngBounds: NETHERLANDS_BOUNDS,
                        strictBounds: true,
                    },
                }}
            >
                {/* create markers for place types */}
                {mapLoaded &&
                    places.map((place, idx) => (
                        <MarkerF
                            key={idx}
                            position={{
                                lat: place.coordinates[0],
                                lng: place.coordinates[1],
                            }}
                            icon={{
                                url: place.place_type_icon,
                                scaledSize: new window.google.maps.Size(32, 32),
                            }}
                            title={place.name}
                        />
                    ))}
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
