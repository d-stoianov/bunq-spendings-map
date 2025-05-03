import Map from '@/features/map/Map'
import Profile from '@/features/user-profile/Profile'
import React from 'react'

const HomePage: React.FC = () => {
    return (
        <div className="flex h-screen flex-col items-center">
            <header className="py-4">
                <h1 className="text-2xl">Your personalized suggestions 💰</h1>
            </header>
            <main className="flex w-full justify-around">
                <div className="flex w-1/5 justify-center">
                </div>
                <div className="flex w-3/5 items-center justify-center">
                    <Map />
                </div>
                <div className="flex w-1/5 justify-center">
                    <Profile />
                </div>
            </main>
        </div>
    )
}

export default HomePage
