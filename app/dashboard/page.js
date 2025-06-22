import { User } from 'lucide-react'
import React from 'react'
import UserInfo from './components/UserInfo'

const Dashboard = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center mt-10">
                    Welcome to the Dashboard
                </h1>
                <p className="text-center mt-4">
                    This is a protected route that only authenticated users can access.
                </p>
                <UserInfo/>
            </div>
        </div>
    )
}

export default Dashboard