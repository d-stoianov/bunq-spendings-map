const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const mapContainerStyle = {
    width: '100%',
    height: '700px',
    borderRadius: '20px',
}

const AMSTERDAM_COORDINATES = {
    lat: 52.3676,
    lng: 4.9041,
}

const NETHERLANDS_BOUNDS = {
    north: 53.755,
    south: 50.75,
    east: 7.3,
    west: 3.4,
}

export {
    AMSTERDAM_COORDINATES,
    GOOGLE_MAPS_API_KEY,
    mapContainerStyle,
    NETHERLANDS_BOUNDS,
}
