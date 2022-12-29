import React from 'react'
import { User } from '../types/User'

function UserItem({ user }: Props) {
    return (
        <div>{user?.login}</div>
    )
}

export default UserItem

interface Props {
    user?: User
}