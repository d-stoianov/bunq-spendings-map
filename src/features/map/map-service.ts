import restaurantIcon from "@/assets/icons/restaurant.webp"
import museumIcon from "@/assets/icons/museum.svg"

const API_URL = import.meta.env.VITE_API_URL
const MOCK_PATH = '/mocks/places.json'

type PlaceType = 'Restaurant' | 'Museum' | 'Bar'
type RecType = 'Trending' | 'Related'

interface PlaceDTO {
    name: string
    short_summary: string
    google_maps_link: string
    photos: string[]
    coordinates: [number, number] // [latitude, longitude]
    address: string
    place_type: PlaceType
    rec_type: RecType
    rag_info_id: number
}

export type Place = PlaceDTO & {
    place_type_icon: string
}

class MapService {
    private useMock: boolean

    constructor(useMock: boolean = false) {
        this.useMock = useMock
    }

    async getPlaces(): Promise<Place[]> {
        const url = this.useMock ? MOCK_PATH : `${API_URL}/places`

        try {
            const response = await fetch(url)
            const placesDTOs: PlaceDTO[] = await response.json()

            // populate icons to the places
            const places = placesDTOs.map((p) => {
                const icon = MapService.getIconForPlaceType(p.place_type)

                return { ...p, place_type_icon: icon }
            })

            return places
        } catch (error) {
            console.error('Failed to fetch places:', error)
            return []
        }
    }

    static getIconForPlaceType(placeType: PlaceType): string {
        switch (placeType) {
            case 'Restaurant':
                return restaurantIcon
            case 'Bar':
                return '/icons/bar.png'
            case 'Museum':
                return museumIcon
            default:
                return '/icons/default.png'
        }
    }
}

const mapService = new MapService(true)

export default mapService
