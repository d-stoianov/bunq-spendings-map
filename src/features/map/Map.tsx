import {
    AMSTERDAM_COORDINATES,
    GOOGLE_MAPS_API_KEY,
    mapContainerStyle,
    NETHERLANDS_BOUNDS,
} from '@/features/map/constants'
import '@/features/map/map-styles.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api' // Use MarkerF as a fallback

const Map: React.FC = () => {
    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
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
                        strictBounds: true, // Ensure the map is always inside the bounds
                    },
                }}
            ></GoogleMap>
        </LoadScript>
    )
}

export default Map
