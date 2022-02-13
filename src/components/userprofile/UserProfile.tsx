import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { json } from 'stream/consumers'

const UserProfile: React.FunctionComponent = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()
    return (
        <>
            {isAuthenticated ? (
                <div>{JSON.stringify(user)}</div>
            ) : (
                <div>Please Log In</div>
            )}
        </>
    )
}

export default UserProfile
