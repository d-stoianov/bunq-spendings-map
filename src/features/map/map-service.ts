import barIcon from '@/assets/icons/bar.png'
import fireIcon from '@/assets/icons/fire.png'
import museumIcon from '@/assets/icons/museum.svg'
import relatedIcon from '@/assets/icons/related.webp'
import restaurantIcon from '@/assets/icons/restaurant.webp'

const API_URL = import.meta.env.VITE_API_URL
const MOCK_PATH = '/src/mocks/'

type PlaceType = 'restaurant' | 'museum' | 'bar'
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

export type MapIndicator = {
    name: PlaceType | RecType
    icon: string
}

class MapService {
    private useMock: boolean

    private mapIndicators: MapIndicator[]

    constructor(useMock: boolean = false) {
        this.useMock = useMock
        this.mapIndicators = []
    }

    async getPlaces(): Promise<Place[]> {
        const url = this.useMock
            ? `${MOCK_PATH}/places.json`
            : `${API_URL}/101/suggested_places/2`

        try {
            const response = await fetch(url)
            const placesDTOs: PlaceDTO[] = await response.json()

            // populate icons to the places
            const places = placesDTOs.map((p) => {
                const icon = MapService.getIconForPlaceType(p.place_type)

                return { ...p, place_type_icon: icon }
            })

            this.populateIndicators(places)

            return places
        } catch (error) {
            console.error('Failed to fetch places:', error)
            return []
        }
    }

    async getExtraPlaces(places: Place[]): Promise<Place[]> {
        const url = this.useMock
            ? `${MOCK_PATH}/more-places.json`
            : `${API_URL}/101/suggested_places/4`

        try {
            const response = await fetch(url)
            const morePlacesDTOs: PlaceDTO[] = await response.json()

            // populate icons to the places
            const morePlaces = morePlacesDTOs.map((p) => {
                const icon = MapService.getIconForPlaceType(p.place_type)

                return { ...p, place_type_icon: icon }
            })

            const combinedPlaces = [...places, ...morePlaces]

            this.populateIndicators(combinedPlaces)

            // mock loading
            await new Promise((resolve) => setTimeout(resolve, 2000))

            return combinedPlaces
        } catch (error) {
            console.error('Failed to fetch places:', error)
            return []
        }
    }

    getIndicators(): MapIndicator[] {
        return Array.from(this.mapIndicators)
    }

    private populateIndicators(places: Place[]) {
        places.forEach((p) => {
            const placeTypeIndicator: MapIndicator = {
                name: p.place_type,
                icon: p.place_type_icon,
            }

            this.mapIndicators.push(placeTypeIndicator)
        })

        places.forEach((p) => {
            const recTypeIndicator: MapIndicator = {
                name: p.rec_type,
                icon: p.rec_type === 'Related' ? relatedIcon : fireIcon,
            }

            this.mapIndicators.push(recTypeIndicator)
        })

        this.mapIndicators = this.mapIndicators.filter(
            (obj1, i, arr) =>
                arr.findIndex((obj2) => obj2.name === obj1.name) === i
        )
    }

    static getIconForPlaceType(placeType: PlaceType): string {
        switch (placeType) {
            case 'restaurant':
                return restaurantIcon
            case 'bar':
                return barIcon
            case 'museum':
                return museumIcon
            default:
                return ''
        }
    }
}

const mapService = new MapService(false)

export default mapService
