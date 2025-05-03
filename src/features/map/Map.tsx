import {
    AMSTERDAM_COORDINATES,
    customMapStyles,
    GOOGLE_MAPS_API_KEY,
    mapContainerStyle,
    NETHERLANDS_BOUNDS,
} from '@/features/map/constants'
import { Place } from '@/features/map/map-service'
import '@/features/map/map-styles.css'
import PlaceCard from '@/features/map/PlaceCard'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
import { useRef, useState } from 'react'

const Map: React.FC<{ places: Place[] }> = ({ places }) => {
    const [mapLoaded, setMapLoaded] = useState(false)
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
    const mapRef = useRef<google.maps.Map | null>(null)

    const handleMarkerClick = (place: Place) => {
        setSelectedPlace(place)
        if (mapRef.current) {
            mapRef.current.panTo({
                lat: place.coordinates[0],
                lng: place.coordinates[1],
            })
            mapRef.current.setZoom(12)
        }
    }

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                onLoad={(map) => {
                    setMapLoaded(true)
                    mapRef.current = map
                }}
                mapContainerStyle={mapContainerStyle}
                center={AMSTERDAM_COORDINATES}
                zoom={8}
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
                    styles: customMapStyles,
                }}
            >
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
                            onClick={() => handleMarkerClick(place)}
                        />
                    ))}

                {selectedPlace && (
                    <PlaceCard
                        place={selectedPlace}
                        onClose={() => setSelectedPlace(null)}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
