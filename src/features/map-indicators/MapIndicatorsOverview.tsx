import { MapIndicator } from '@/features/map/map-service'

const MapIndicatorsOverview: React.FC<{ indicators: MapIndicator[] }> = ({
    indicators,
}) => {
    return (
        <div className="flex flex-col gap-2">
            {indicators.map((i) => (
                <div className="flex items-center gap-2">
                    <span>
                        <img className="w-[28px]" src={i.icon} />
                    </span>
                    <span className="text-xl">-- {i.name}</span>
                </div>
            ))}
        </div>
    )
}

export default MapIndicatorsOverview
