import userIcon from '@/assets/icons/user.png'
import { useAuth } from '@/context/AuthContext'

const Profile: React.FC = () => {
    const { user, logout } = useAuth()

    if (!user) {
        return null
    }

    return (
        <div className="h-fit w-64 rounded-2xl border-gray-100 border-2 bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Profile
            </h2>
            <div className="flex flex-col items-center space-y-3">
                <img
                    className="h-20 w-20 rounded-full border-2 border-gray-300 object-cover"
                    src={user.image || userIcon}
                    alt="User"
                />
                <span className="text-lg font-medium text-gray-700">
                    {user.name}
                </span>
                <button
                    onClick={logout}
                    className="mt-2 rounded-md bg-red-500 px-6 py-2 text-sm text-white transition hover:bg-red-600"
                >
                    Log out
                </button>
            </div>
        </div>
    )
}

export default Profile
