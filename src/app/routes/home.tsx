import Map from '@/features/map/Map'
import React from 'react'

const HomePage: React.FC = () => {
    return (
        <div className="flex h-screen flex-col justify-center">
            <div className="flex w-full items-center justify-center">
                <div className="w-2/3">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default HomePage
