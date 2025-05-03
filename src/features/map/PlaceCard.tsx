import { Place } from '@/features/map/map-service'
import { InfoWindow } from '@react-google-maps/api'

const PlaceCard: React.FC<{ place: Place; onClose: () => void }> = ({
    place,
    onClose,
}) => {
    return (
        <InfoWindow
            position={{
                lat: place.coordinates[0],
                lng: place.coordinates[1],
            }}
            onCloseClick={onClose}
            options={{ headerDisabled: true }}
        >
            <div className="relative w-72 rounded-lg bg-white p-4 shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute right-0 top-0 text-gray-600 hover:text-gray-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <h3 className="mb-1 text-lg font-semibold text-gray-800">
                    {place.name}
                </h3>

                <p className="mb-2 text-sm text-gray-500">{place.address}</p>

                <p className="mb-3 text-sm text-gray-700">
                    {place.short_summary}
                </p>

                <a
                    href={place.google_maps_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 inline-block text-sm text-blue-600 hover:underline"
                >
                    View on Google Maps
                </a>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <p className="text-sm capitalize text-gray-600">
                        {place.place_type} • {place.rec_type}
                    </p>
                </div>
            </div>
        </InfoWindow>
    )
}

export default PlaceCard
