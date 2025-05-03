import { useHome } from '@/context/HomeContext'

const MapIndicatorsOverview: React.FC = () => {
    const { mapIndicators } = useHome()

    return (
        <div className="flex flex-col gap-2">
            {mapIndicators.map((i, idx) => (
                <div className="flex items-center gap-2" key={idx}>
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
